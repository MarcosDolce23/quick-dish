export function initializeFavorites(locale) {

   let dishes = [
      {
         id: 1,
         esName: "Ensalada de Queso",
         enName: "Ensalada de Queso",
         esLabel: "refrescante",
         esLabel: "refrescante",
         esIngredients: [
            "Leche",
            "Cebolla",
            "Queso"
         ],
         enIngredients: [
            "Leche",
            "Cebolla",
            "Queso"
         ],
         cookTime: 30,
         vegan: false,
         esRecipe: [
            "Verter en una coctelera 60ml Tequila.",
            "Agregar 60ml Ron Blanco.",
            "Agregar 60ml de Jugo de Naranja y trozos de Hielo.",
            "Agitar fuerte.",
            "Pasar la Naranja por el borde de la copa y colocarla boca abajo en un plato con azúcar, para realizar un escarchado.",
            "Vertir la mezcla de la coctelera en la copa."
         ],
         enRecipe: [
            "Verter en una coctelera 60ml Tequila.",
            "Agregar 60ml Ron Blanco.",
            "Agregar 60ml de Jugo de Naranja y trozos de Hielo.",
            "Agitar fuerte.",
            "Pasar la Naranja por el borde de la copa y colocarla boca abajo en un plato con azúcar, para realizar un escarchado.",
            "Vertir la mezcla de la coctelera en la copa."
         ],
         image: "url(images/dishes/test-image-icon.png)",
         headerImage: "images/dishes/test-image.png",
         favorite: false
      },
      {
         id: 2,
         esName: "Ensalada de Berenjena",
         enName: "Ensalada de Berenjena",
         esLabel: "refrescante",
         enLabel: "refrescante",
         esIngredients: [
            "Bereneja",
            "Cebolla",
            "Lechuga",
            "Crema"
         ],
         enIngredients: [
            "Bereneja",
            "Cebolla",
            "Lechuga",
            "Crema"
         ],
         vegan: true,
         cookTime: 15,
         esRecipe: [
            "Verter el 33% de una jarra con Jugo de Naranja natural.",
            "Agregar un 16% de Ginebra.",
            "Agregar otro 16% de Vodka.",
            "Incorporar un 33% de Champagne",
            "Revolver suavemente.",
            "Trasladar a la nevera donde la dejamos enfriar por un espacio de una hora antes de servir."
         ],
         enRecipe: [
            "Verter el 33% de una jarra con Jugo de Naranja natural.",
            "Agregar un 16% de Ginebra.",
            "Agregar otro 16% de Vodka.",
            "Incorporar un 33% de Champagne",
            "Revolver suavemente.",
            "Trasladar a la nevera donde la dejamos enfriar por un espacio de una hora antes de servir."
         ],
         image: "url(images/dishes/test-image-icon.png)",
         headerImage: "images/dishes/test-image.png",
         favorite: false
      }
   ];

   let storage = window.localStorage;
   
   for (let i in dishes) {
      let value = storage.getItem(dishes[i].id);
      if (value) {
         dishes[i].favorite = true;
      }
   }

   return dishes;
}