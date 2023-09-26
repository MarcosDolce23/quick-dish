import React, { useDebugValue } from 'react';
import { Suspense } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Axios from 'axios';
import env from 'react-dotenv';

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
  const { t, i18n } = useTranslation();
  const l = i18n.resolvedLanguage;

  const [dishes, setDishes] = useState([]);
  const [dish, setDish] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState(null);
  const [fridge, setFridge] = useState([]);
  // const fridge = getIngredients(i18n.resolvedLanguage);

  useEffect(() => {
    Axios({
      url: env.API_URL + "/dishes/",
    })
      .then((response) => {
        // setIsLoaded(true);
        setDishes(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoaded(true);
        // setError(error);
      });
    Axios({
      url: env.API_URL + "/categories/",
    })
      .then((response) => {
        // setIsLoaded(true);
        setFridge(response.data);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoaded(true);
        // setError(error);
      });
  }, []);

  //Esta función compara cuantos elementos coinciden entres dos arrays 
  const countSimilars = (arrayA, arrayB) => {
    let matches = 0;
    for (let i = 0; i < arrayA.length; i++) {
      // if (arrayB.indexOf(arrayA[i]) !== -1)
      if (arrayB.some(e => e._id === arrayA[i]._id))
        matches++;
    }
    return matches;
  };

  // Esta función cuenta cuantos ingredientes del plato pueden ser seleccionados de la heladera (no todos los ingredientes de un plato son elegibles)
  const countSelectables = (ingredients, fridge) => {
    let selectable = 0;
    ingredients.forEach(element => {
      for (let i = 0; i < fridge.length; i++) {
        if (fridge[i].ingredients.some(i => i._id === element._id)) {
          selectable += 1;
          break;
        }
      }
    })
    return selectable;
  };

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
  };

  //Buscar un nombre descriptivo para este método.
  const returnCoincidences = () => {
    let coincidences = [];

    // 1º Por cada plato cuento cuantos ingrediente coinciden con los elegidos
    // 2º Obtengo el total de ingredientes elegibles del plato
    // 3º Obtengo el porcentaje de coincidencia
    dishes.forEach(dish => {
      let count = countSimilars(selectedIngredients, dish.ingredients);
      let aux = countSelectables(dish.ingredients, fridge);
      let coincidenceRate = (count * 100) / aux;
      if (coincidenceRate > 65) coincidences.push(dish);
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

  const selectDish = (sel) => {
    setDish(sel);
  };

  const setFavorite = (obj, id, val) => {
    for (let i in obj) {
      if (obj[i].id === id) {
        obj[i].favorite = val;
        break; //Stop this loop, we found it!
      }
    }
  }

  // Método para guardar los platos favoritos.
  const markAsFavorite = (fav) => {
    let dishesList = dishes.slice();
    let storage = window.localStorage;
    let value = storage.getItem(fav);

    if (value) {
      storage.removeItem(fav)
      setFavorite(dishesList, fav, false);
    } else {
      storage.setItem(fav, true)
      setFavorite(dishesList, fav, true);
    }

    setDishes(dishesList);
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
            dishes={dishes}
            onClickFilterTime={(filter) => updateFilterCriteria(filter)}
            onClickVegan={selectDish}
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
            title={t('footer.search')}
          />
        </Route>
        <Route exact path="/favorites">
          <Search
            dishes={dishes.filter(e => e.favorite === true)}
            selectDish={(sel) => selectDish(sel)}
            markAsFavorite={(fav) => markAsFavorite(fav)}
            title={t('footer.favourites')}
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
          label={t('footer.home')}
          to="/"
          activeOnlyWhenExact={true}
          onClickFooter={() => resetIngredients()}
          imagen="images/icons/home.png"
        />
        <ButtonFooter
          label={t('footer.fridge')}
          to="/fridge"
          activeOnlyWhenExact={false}
          imagen="images/icons/refrigerator.png"
        />
        <ButtonFooter
          label={t('footer.search')}
          to="/search"
          activeOnlyWhenExact={false}
          onClickFooter={() => updateFilterCriteria(null)}
          imagen="images/icons/search.png"
        />
        <ButtonFooter
          // label="Favoritos"
          label={t('footer.favourites')}
          to="/favorites"
          activeOnlyWhenExact={true}
          imagen="images/icons/favorites.png"
        />
      </div>
    </Router>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}