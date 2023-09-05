import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Import CSS
import './App.css';

// Import Pages
import Home from './pages/Home';
import Fridge from './pages/Fridge';
import Search from './pages/Search';
import Dish from './pages/Dish';
import Dishes from './pages/Dishes';

// Import Components
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonFooter from './components/ButtonFooter';
import { initializeFavorites } from './components/Storage';
import { getIngredients } from './components/Fridge';

function App() {

  const [dishes, setDishes] = useState(initializeFavorites());
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [dish, setDish] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState(null);
  const fridge = getIngredients();

  //Esta función compara cuantos elementos coinciden entres dos arrays 
  const countSimilars = (arrayA, arrayB) => {
    let matches = 0;
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayB.indexOf(arrayA[i]) !== -1)
        matches++;
    }
    return matches;
  }

  // Esta función cuenta cuantos ingredientes del plato pueden ser seleccionados de la heladera (no todos los ingredientes de un plato son elegibles)
  const countSelectables = (dishIngredients, fridge) => {
    let selectable = 0;
    dishIngredients.forEach(element => {
      for (let i = 0; i < fridge.length; i++) {
        if (fridge[i].ingredients.includes(element)) {
          selectable += 1;
          break;
        }
      }
    })
    return selectable;
  }

  // Selecciona/Deselecciona ingredientes
  const toggleIngredients = (ingredient) => {
    let ingredients = selectedIngredients.slice();
    //Agrego el ingrediente elegido a la lista y si ya existe lo quito
    if (ingredients.includes(ingredient)) {
      ingredients = ingredients.filter(e => e !== ingredient);
    } else {
      ingredients.push(ingredient);
    }
    setSelectedIngredients(ingredients);
  }

  //Buscar un nombre descriptivo para este método.
  const returnCoincidences = () => {
    let coincidences = [];

    // 1º Por cada plato cuento cuantos ingrediente coinciden con los elegidos
    // 2º Obtengo el total de ingredientes elegibles del plato
    // 3º Obtengo el porcentaje de coincidencia
    dishes.forEach(element => {
      let count = countSimilars(selectedIngredients, element.ingredients);
      let aux = countSelectables(element.ingredients, fridge);
      let coincidenceRate = (count * 100) / aux;
      if (coincidenceRate > 65) {
        coincidences.push(element);
        element.coincidences = count; //Agregar esta propiedad a las recetas
      }
    });

    return coincidences;
  };

  //Reinicio los ingredientes a vacío.
  const resetIngredients = () => {
    setSelectedIngredients([]);
  };

  //Este método indica que filtro se usará para los platos a mostrar
  const updateFilterCriteria = (filter) => {
    setFilterCriteria(filter);
  };

  //Selecciona un plato
  const selectDish = (sel) => {
    setDish(sel);
  };

  const setFavorite = (obj, name, val) => {
    for (let i in obj) {
      if (obj[i].name === name) {
        obj[i].favorite = val;
        break; //Stop this loop, we found it!
      }
    }
  }

  // Método para guardar los platos favoritos.
  // En la versión anterior había creado dos métodos por algún motivo que no recuerdo
  // así que eliminé uno de los dos pero no estoy seguro si esto puede causar errores.
  const markAsFavorite = (fav) => {

    let dishesAux = dishes.map(a => ({ ...a }));
    let dishAux = dish;

    let storage = window.localStorage;
    let value = storage.getItem(fav);
    if (value) {
      storage.removeItem(fav)
      if (dishAux) dishAux.favorite = false;
      setFavorite(dishesAux, fav, false);
    } else {
      storage.setItem(fav, true)
      if (dishAux) dishAux.favorite = true;
      setFavorite(dishesAux, fav, true);
    }

    setDishes(dishesAux);
    setDish(dishAux);
  };

  //Filtrar tragos por tiempo de preparación
  const filterByCookTime = (time) => {
    return function (element) {
      if (time === 20) {
        return element.cookTime <= 20;
      }
      if (time === 30) {
        return 20 < element.cookTime && element.cookTime <= 40;
      }
      if (time === 40) {
        return element.cookTime > 40;
      }
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            onClick={(filter) => updateFilterCriteria(filter)}
          />
        </Route>
        <Route exact path="/fridge">
          <Fridge
            value={selectedIngredients}
            coincidences={returnCoincidences()}
            ingredients={fridge}
            onChange={(ingredient) => toggleIngredients(ingredient)}
          />
        </Route>
        <Route exact path="/search">
          <Search
            dishes={filterCriteria === null ? dishes : dishes.filter(filterByCookTime(filterCriteria))}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            title={"Explorar"}
          />
        </Route>
        <Route exact path="/favorites">
          <Search
            dishes={dishes.filter(e => e.favorite === true)}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            title={"Favoritos"}
          />
        </Route>
        <Route exact path="/search/dish">
          <Dish
            dish={dish}
            markAsFavorite={(fav) => markAsFavorite(fav)}
          />
        </Route>
        <Route exact path="/fridge/dishes">
          <Dishes
            ingredients={selectedIngredients}
            dishes={returnCoincidences().sort((a, b) => { return b.coincidences - a.coincidences })}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            toggleIngredients={(ingredient) => toggleIngredients(ingredient)}
            resetIngredients={() => resetIngredients()}
          />
        </Route>
      </Switch>
      <div className="footer">
        <ButtonFooter
          label="Inicio"
          to="/"
          activeOnlyWhenExact={true}
          onClickFooter={() => resetIngredients()}
          imagen="images/icons/home.png"
        />
        <ButtonFooter
          label="Refrigerador"
          to="/fridge"
          activeOnlyWhenExact={false}
          imagen="images/icons/refrigerator.png"
        />
        <ButtonFooter
          label="Explorar"
          to="/search"
          activeOnlyWhenExact={false}
          onClickFooter={() => updateFilterCriteria(null)}
          imagen="images/icons/search.png"
        />
        <ButtonFooter
          label="Favoritos"
          to="/favorites"
          activeOnlyWhenExact={true}
          imagen="images/icons/favorites.png"
        />
      </div>
    </Router>
  );
}

export default App;