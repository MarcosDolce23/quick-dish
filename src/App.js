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
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientsList: [],
      ingredientsCount: 0,
      dishes: initializeFavorites(),
      coincidences: [],
      dish: null,
      filterCriteria: null,
      fridge: getIngredients()
    };
  }


  //Buscar un nombre descriptivo para este método.
  handleInputChange(ingredient) {
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
    let ingredientsList = this.state.ingredientsList;
    let coincidences = [];
    let dishes = this.state.dishes.map(a => ({ ...a })); //hago una copia de dishes
    let fridge = this.state.fridge.map(a => ({ ...a })); //hago una copia de dishes

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
  }

  //Reinicio los ingredientes a vacío.
  resetIngredients() {
    this.setState({ ingredientsList: [] });
    this.setState({ ingredientsCount: 0 });
    this.setState({ coincidences: [] });
  }

  //Este método indica que filtro se usará para los platos a mostrar
  setFilterCriteria(filter) {
    this.setState({ filterCriteria: filter });
  }

  //Selecciona un plato
  selectDish(sel) {
    this.setState({ dish: sel });
  }

  // Método para guardar los platos favoritos.
  // En la versión anterior había creado dos métodos por algún motivo que no recuerdo
  // así que eliminé uno de los dos pero no estoy seguro si esto puede causar errores.
  markAsFavorite(fav) {

    function setFavorite(obj, name, val) {
      for (var i in obj) {
        if (obj[i].name === name) {
          obj[i].favorite = val;
          break; //Stop this loop, we found it!
        }
      }
    }

    let dishes = this.state.dishes.map(a => ({ ...a }));
    let coincidences = this.state.coincidences.map(a => ({ ...a }));
    let dish = this.state.dish;

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
  }

  //Filtrar tragos por tiempo de preparación
  filterByCookTime(time) {
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
  }

  filterDishes(e) {
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

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              onClick={(filter) => this.setFilterCriteria(filter)}
            />
          </Route>
          <Route exact path="/fridge">
            <Fridge
              value={this.state.ingredientsList}
              ingredientsCount={this.state.ingredientsCount}
              coincidences={this.state.coincidences}
              ingredients={this.state.fridge}
              onChange={(ingredient) => this.handleInputChange(ingredient)}
            />
          </Route>
          <Route exact path="/search">
            <Search
              dishes={this.state.filterCriteria === null ? this.state.dishes : this.state.dishes.filter(this.filterByCookTime(this.state.filterCriteria))}
              selectDish={(sel) => this.selectDish(sel)}
              markAsFavorite={(fav) => this.markAsFavorite(fav)}
              filterDishes={(e) => this.filterDishes(e)}
            />
          </Route>
          <Route exact path="/favorites">
            <Favorites
              dishes={this.state.dishes.filter(e => e.favorite === true)}
              selectDish={(sel) => this.selectDish(sel)}
              markAsFavorite={(fav) => this.markAsFavorite(fav)}
              filterDishes={(e) => this.filterDishes(e)}
            />
          </Route>
          <Route exact path="/search/dish">
            <Dish
              dish={this.state.dish}
              markAsFavorite={(fav) => this.markAsFavorite(fav)}
            />
          </Route>
          <Route exact path="/fridge/dishes">
            <Dishes
              ingredients={this.state.ingredientsList}
              dishes={this.state.coincidences.sort((a, b) => { return b.coincidences - a.coincidences })}
              selectDish={(sel) => this.selectDish(sel)}
              markAsFavorite={(fav) => this.markAsFavorite(fav)}
              handleInputChange={(ingredient) => this.handleInputChange(ingredient)}
              resetIngredients={() => this.resetIngredients()}
            />
          </Route>
        </Switch>
        <div className="footer">
          <ButtonFooter
            label="Inicio"
            to="/"
            activeOnlyWhenExact={true}
            onClickFooter={() => this.resetIngredients()}
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
            onClickFooter={() => this.setFilterCriteria(null)}
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
}

export default App;