import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// Import CSS
import './App.css';

// Import Pages
import Home from './pages/Home';
import Fridge from './pages/Fridge';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Dish from './pages/Dish';
import Dishes from './pages/Dishes';

// Import Components
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ButtonFooter from './components/ButtonFooter';
import { initializeFavorites } from './components/Storage';
import { getIngredients } from './components/Fridge';

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     ingredientsList: [],
  //     ingredientsCount: 0,
  //     dishes: initializeFavorites(),
  //     coincidences: [],
  //     dish: null,
  //     filterCriteria: null,
  //     fridge: getIngredients()
  //   };
  // }

  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsCount, setIngredientesCount] = useState(0);
  const [dishes, setDishes] = useState(initializeFavorites());
  const [coincidences, setCoincidences] = useState([]);
  const [dish, setDish] = useState(null);
  const [filterCriteria, setFilterCriteria] = useState(null);
  const fridge = getIngredients();

  //Buscar un nombre descriptivo para este método.
  const handleInputChange = (ingredient) => {
    //Esta función compara cuantos elementos coinciden entres dos arrays 
    function countSimilars(arrayA, arrayB) {
      var matches = 0;
      for (var i = 0; i < arrayA.length; i++) {
        if (arrayB.indexOf(arrayA[i]) !== -1)
          matches++;
      }
      return matches;
    }

    // Esta función cuenta cuantos ingredientes del plato pueden ser seleccionados de la heladera (no todos los ingredientes de un plato son elegibles)
    function countSelectables(dishIngredients, fridge) {
      let selectable = 0;
      dishIngredients.forEach(element => {
        for (var i = 0; i < fridge.length; i++) {
          if (fridge[i].ingredients.includes(element)) {
            selectable += 1;
            break;
          }
        }
      })
      return selectable;
    }

    let ingredientsCount = 0;
    let ingredientsList = ingredientsList;
    let coincidences = [];
    let dishes = dishes.map(a => ({ ...a })); //hago una copia de dishes
    let fridge = fridge.map(a => ({ ...a })); //hago una copia de dishes

    //Agrego el ingrediente elegido a la lista y si ya existe lo quito
    if (ingredientsList.includes(ingredient)) {
      ingredientsList = ingredientsList.filter(e => e !== ingredient);
    } else {
      ingredientsList.push(ingredient);
    }

    // 1º Por cada plato cuento cuantos ingrediente coinciden con los elegidos
    // 2º Obtengo el total de ingredientes elegibles del plato
    // 3º Obtengo el porcentaje de coincidencia
    dishes.forEach(element => {
      let count = countSimilars(ingredientsList, element.ingredients);
      let aux = countSelectables(element.ingredients, fridge);
      let coincidenceRate = (count * 100) / aux;
      if (coincidenceRate > 65) {
        ingredientsCount++;
        coincidences.push(element);
        element.coincidences = count; //Agregar esta propiedad a las recetas
      }
    });

    this.setState({ ingredientsList: ingredientsList });
    this.setState({ ingredientsCount: ingredientsCount });
    this.setState({ coincidences: coincidences })
  };

  //Reinicio los ingredientes a vacío.
  const resetIngredients = () => {
    this.setState({ ingredientsList: [] });
    this.setState({ ingredientsCount: 0 });
    this.setState({ coincidences: [] });
  };

  //Este método indica que filtro se usará para los platos a mostrar
  const updateFilterCriteria = (filter) => {
    setFilterCriteria(filter);
  };

  //Selecciona un plato
  const selectDish = (sel) => {
    this.setState({ dish: sel });
  };

  // Método para guardar los platos favoritos.
  // En la versión anterior había creado dos métodos por algún motivo que no recuerdo
  // así que eliminé uno de los dos pero no estoy seguro si esto puede causar errores.
  const markAsFavorite = (fav) => {

    function setFavorite(obj, name, val) {
      for (var i in obj) {
        if (obj[i].name === name) {
          obj[i].favorite = val;
          break; //Stop this loop, we found it!
        }
      }
    }

    let dishes = dishes.map(a => ({ ...a }));
    let coincidences = coincidences.map(a => ({ ...a }));
    let dish = dish;

    let storage = window.localStorage;
    let value = storage.getItem(fav);
    if (value) {
      storage.removeItem(fav)
      if (dish) dish.favorite = false;
      setFavorite(dishes, fav, false);
      setFavorite(coincidences, fav, false);
    } else {
      storage.setItem(fav, true)
      if (dish) dish.favorite = true;
      setFavorite(dishes, fav, true);
      setFavorite(coincidences, fav, true);
    }

    this.setState({ dishes: dishes, coincidences: coincidences, dish: dish });
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

  const filterDishes = (e) => {
    var filter = e.target.value.toUpperCase();

    var divs = document.getElementsByClassName("dish-card");
    for (var i = 0; i < divs.length; i++) {
      var a = divs[i].getElementsByClassName("h1-card")[0];

      if (a) {
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          divs[i].style.display = "";
        } else {
          divs[i].style.display = "none";
        }
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
            value={ingredientsList}
            ingredientsCount={ingredientsCount}
            coincidences={coincidences}
            ingredients={fridge}
            onChange={(ingredient) => handleInputChange(ingredient)}
          />
        </Route>
        <Route exact path="/search">
          <Search
            dishes={filterCriteria === null ? dishes : dishes.filter(filterByCookTime(filterCriteria))}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            filterDishes={(e) => filterDishes(e)}
          />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            dishes={dishes.filter(e => e.favorite === true)}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            filterDishes={(e) => filterDishes(e)}
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
            ingredients={ingredientsList}
            dishes={coincidences.sort((a, b) => { return b.coincidences - a.coincidences })}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            handleInputChange={(ingredient) => handleInputChange(ingredient)}
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