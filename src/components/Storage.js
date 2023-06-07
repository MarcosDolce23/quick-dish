export function initializeFavorites() {

   let dishes = [
      {
         "name": "Acapulco de Noche",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Naranja",
            "Azúcar",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Verter en una coctelera 60ml Tequila.",
            "Agregar 60ml Ron Blanco.",
            "Agregar 60ml de Jugo de Naranja y trozos de Hielo.",
            "Agitar fuerte.",
            "Pasar la Naranja por el borde de la copa y colocarla boca abajo en un plato con azúcar, para realizar un escarchado.",
            "Vertir la mezcla de la coctelera en la copa."
         ],
         "image": "url(images/dishes/test-image-icon.png)",
         "headerImage": "images/dishes/test-image.png",
         "favorite": false
      },
      {
         "name": "Agua de Valencia",
         "label": "refrescante",
         "ingredients": [
            "Jugo de Naranja",
            "Ginebra",
            "Vodka",
            "Champagne",
            "Hielo"
         ],
         "cookTime": 15,
         "recipe": [
            "Verter el 33% de una jarra con Jugo de Naranja natural.",
            "Agregar un 16% de Ginebra.",
            "Agregar otro 16% de Vodka.",
            "Incorporar un 33% de Champagne",
            "Revolver suavemente.",
            "Trasladar a la nevera donde la dejamos enfriar por un espacio de una hora antes de servir."
         ],
         "imagen": "url(imgs/dishes-icons/AguadeValencia.png)",
         "headerImage": "imgs/dishes/Agua de Valencia.svg",
         "favorite": false
      },
      {
         "name": "Aldea Margarita",
         "label": "aperitivo",
         "ingredients": [
            "Tequila Blanco",
            "Rubia Lager",
            "Limón",
            "Ají Molido",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Humedecer el borde de un vaso tipo pinta americana con el Limón.",
            "Recubrirlo con el ají molido.",
            "Verter 60ml de Tequila.",
            "Agregar 150ml de cerveza Rubia Lager.",
            "Revolver suavemente."
         ],
         "imagen": "url(imgs/dishes-icons/AldeaMargarita.png)",
         "headerImage": "imgs/dishes/Aldea Margarita.svg",
         "favorite": false
      },
      {
         "name": "Algonquin",
         "label": "aperitivo",
         "ingredients": [
            "Whisky",
            "Jugo de Ananá",
            "Vermouth Seco",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "En una coctelera agregar Hielo.",
            "Agregar 1 parte de Whisky.",
            "Agregar 1/2 parte de Jugo de Ananá.",
            "Agregar 1/2 parte de Vermouth Seco.",
            "Agitar durante unos segundos.",
            "Servir en un vaso utilizando el mismo Hielo de la coctelera."
         ],
         "imagen": "url(imgs/dishes-icons/Algonquin.png)",
         "headerImage": "imgs/dishes/Algonquin.svg",
         "favorite": false
      },
      {
         "name": "Amanecer moscovita",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Menta",
            "Curaçao Rojo",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Dentro de una copa verter Hielo.",
            "Agregar 12,5ml de Curaçao Rojo.",
            "Agregar 15ml de Menta.",
            "Agregar 100ml Vodka.",
            "Revolver muy bien.",
            "Decorar con una Guinda y hojas de Menta."
         ],
         "imagen": "url(imgs/dishes-icons/amanecerMoscovita.png)",
         "headerImage": "imgs/dishes/amanecer moscovita.svg",
         "favorite": false
      },
      {
         "name": "Americanino Gancia",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Spritz Gancia",
            "Soda",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 50,
         "recipe": [
            "Agregar en un vaso de trago largo Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar 1 parte de Spritz Gancia.",
            "Completar con Soda.",
            "Decorar con una piel de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/AmericanoGancia.png)",
         "headerImage": "imgs/dishes/Americano (gancia).svg",
         "favorite": false
      },
      {
         "name": "Americanino Campari",
         "label": "aperitivo",
         "ingredients": [
            "Campari",
            "Vermouth Rojo",
            "Soda",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en un vaso 3 hielos.",
            "Agregar 1 parte de Campari.",
            "Agregar 1 parte de Vermouth Rojo.",
            "Completar con un golpe de Soda.",
            "Decorar con una rodaja de Naranja o piel de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/AmericanoCampari.png)",
         "headerImage": "imgs/dishes/Americano (campari).svg",
         "favorite": false
      },
      {
         "name": "Apple Gancia",
         "label": "refrescante",
         "ingredients": [
            "Americano Gancia",
            "Vodka",
            "Jugo de Manzana",
            "Manzana",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en un vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Agregar 2 partes de Jugo de Manzana.",
            "Agregar 6 partes de Vodka.",
            "Decorar con una rodaja de Manzana Verde."
         ],
         "imagen": "url(imgs/dishes-icons/AppleGancia.png)",
         "headerImage": "imgs/dishes/Apple Gancia.svg",
         "favorite": false
      },
      {
         "name": "Ártico",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Jugo de Aceituna",
            "Aceituna",
            "Lima",
            "Agua Tónica",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Enfríar una copa estilo margarita.",
            "Agregar 60ml de Tequila.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 5ml de Jugo de Aceituna.",
            "Agregar 3 Aceitunas.",
            "Completar con la Tónica.",
            "Remover todo sin agitar.",
            "Decorar con una rodaja de Lima."
         ],
         "imagen": "url(imgs/dishes-icons/Artico.png)",
         "headerImage": "imgs/dishes/Artico.svg",
         "favorite": false
      },
      {
         "name": "Bacardí",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Jugo de Lima",
            "Granadina",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en una coctelera abundante Hielo.",
            "Agregar 45ml de Ron Blanco.",
            "Agregar 20ml de Jugo de Lima.",
            "Agregar 10ml de Granadina.",
            "Agitar la coctelera.",
            "Se puede poner una cucharada pequeña de azúcar si se encuentra muy fuerte.",
            "Enfriar el contenido.",
            "Servir en una copa de Martini sin Hielo previamente enfriada.",
            "Adornar la copa con una rodajita de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/Bacardi.png)",
         "headerImage": "imgs/dishes/Bacardi.svg",
         "favorite": false
      },
      {
         "name": "Bed Of Roses",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Jugo de Limón",
            "Granadina",
            "Jugo de Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en una coctelera Hielo.",
            "Agregar 45ml de Jägermeister.",
            "Agregar 60ml de Jugo de Limón.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 30ml de Granadina.",
            "Agitar bien.",
            "Servir en un vaso de margarita, previamente enfriado.",
            "Adornar con media rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/BedOfRoses.png)",
         "headerImage": "imgs/dishes/Bed of roses.svg",
         "favorite": false
      },
      {
         "name": "Beer Mimosa",
         "label": "refrescante",
         "ingredients": [
            "American IPA",
            "Jugo de Pomelo",
            "Pomelo"
         ],
         "cookTime": 30,
         "recipe": [
            "Verter en un vaso tipo pinta americana 1/3 de la cerveza.",
            "Completar con en Jugo de Pomelo.",
            "Revolver suavemente.",
            "Decorar con la piel del Pomelo."
         ],
         "imagen": "url(imgs/dishes-icons/BeerMimosa.png)",
         "headerImage": "imgs/dishes/Beer Mimosa.svg",
         "favorite": false
      },
      {
         "name": "Between The Sheets",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Brandy",
            "Triple Sec",
            "Jugo de Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en una coctelera Hielo.",
            "Agregar 30ml de Ron Blanco.",
            "Agregar 30ml coñac o Brandy.",
            "Agregar 30ml de Triple Sec y Jugo de Limón.",
            "Agitar fuertemente.",
            "Servir en una copa de Martini, o en una copa de Champagne, enfriada previamente pasando por un colador.",
            "Decorar el borde de la copa con la piel de un Limón o una Lima."
         ],
         "imagen": "url(imgs/dishes-icons/BetweenTheSheets.png)",
         "headerImage": "imgs/dishes/Between the sheets.svg",
         "favorite": false
      },
      {
         "name": "Black Blood",
         "label": "digestivo",
         "ingredients": [
            "Jägermesiter",
            "Gaseosa Lima Limón",
            "Curaçao Azul",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Verter en una coctelera 2/4 partes de Curaçao Azul.",
            "Agregar 1/4 parte de licor Jägermesiter.",
            "Agregar 1/4 parte de gaseosa sabor Limón.",
            "Introducir varios cubos de Hielo.",
            "Agitar durante unos segundos.",
            "Servir el contenido en una elegante copa de Martini."
         ],
         "imagen": "url(imgs/dishes-icons/BlackBlood.png)",
         "headerImage": "imgs/dishes/BLACK BLOOD.svg",
         "favorite": false
      },
      {
         "name": "Black Orchid",
         "label": "digestivo",
         "ingredients": [
            "Vodka",
            "Jugo de Limón",
            "Licor Creme de Violette"
         ],
         "cookTime": 30,
         "recipe": [
            "Colocar dentro de una coctelera 50ml de Vodka.",
            "Agregar 25ml de Jugo de Limón.",
            "Agregar 50ml de Licor Creme de Violette.",
            "Mezclar todo por un par de minutos.",
            "Luego servir en una copa llena de Hielo.",
            "Decorar el trago con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/blackOrchid.png)",
         "headerImage": "imgs/dishes/black orchid.svg",
         "favorite": false
      },
      {
         "name": "Black Velvet",
         "label": "refrescante",
         "ingredients": [
            "Stout",
            "Champagne"
         ],
         "cookTime": 30,
         "recipe": [
            "LLenar una copa para Champagne con la mitad de Champagne.",
            "Llenar la otra mitad con cerveza Stout.",
            "Decorar con una cereza, dejándola caer hasta el fondo."
         ],
         "imagen": "url(imgs/dishes-icons/BlackVelvet.png)",
         "headerImage": "imgs/dishes/Black Velvet.svg",
         "favorite": false
      },
      {
         "name": "Blackjack cocktail",
         "label": "aperitivo",
         "ingredients": [
            "Whisky",
            "Jugo de Limón",
            "Licor de Café",
            "Triple Sec",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 45ml de Whisky.",
            "Agregar 30ml de Licor de Café.",
            "Agregar 22ml de Triple Sec.",
            "Agregar 22ml dejugo de Limón.",
            "Agitar fuertemente.",
            "Servir en una copa con Hielo.",
            "Decorar con una tira de Naranja o Limón."
         ],
         "imagen": "url(imgs/dishes-icons/BlackjackCocktail.png)",
         "headerImage": "imgs/dishes/Blackjack cocktail.svg",
         "favorite": false
      },
      {
         "name": "Bloody Mary",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Jugo de Tomate",
            "Jugo de Limón",
            "Salsa Tabasco",
            "Sal",
            "Pimienta",
            "Apio",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir dentro de una coctelera Hielo.",
            "Agregar 30ml de Vodka.",
            "Agregar 60ml de Jugo de Tomate.",
            "Agregar 10ml de Jugo de Limón.",
            "Agregar 5 gotas de salsa tabasco, 1 pizca de sal y 1 pizca de pimienta.",
            "Mezclar con una rama de Apio.",
            "Servir en un vaso con Hielo."
         ],
         "imagen": "url(imgs/dishes-icons/bloodyMary.png)",
         "headerImage": "imgs/dishes/bloody mary.svg",
         "favorite": false
      },
      {
         "name": "Blue Margarita",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Curaçao Azul",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Tequila.",
            "Agregar 30ml de Jugo de Limón.",
            "Agregar 30ml de Curaçao Azul.",
            "Agitar hasta que esté bien frío.",
            "Servir en una copa margarita previamente escarchada con sal (los hielos no deben caer en la copa)."
         ],
         "imagen": "url(imgs/dishes-icons/BlueMargarita.png)",
         "headerImage": "imgs/dishes/Blue margarita.svg",
         "favorite": false
      },
      {
         "name": "Boulevardier",
         "label": "aperitivo",
         "ingredients": [
            "Campari",
            "Vermouth Rojo",
            "Whisky"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 2 partes de Campari.",
            "Agregar 2 partes de Vermouth Rojo.",
            "Agregar 3 partes de Whisky.",
            "Agitar durante unos segundos.",
            "Servir en un vaso de coctel previamente enfirado.",
            "Decorar con un twist de Limón"
         ],
         "imagen": "url(imgs/dishes-icons/Boulevardier.png)",
         "headerImage": "imgs/dishes/Boulevardier.svg",
         "favorite": false
      },
      {
         "name": "Brave Bull",
         "label": "aperitivo",
         "ingredients": [
            "Tequila Blanco",
            "Licor de Café",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso de Whisky Hielo.",
            "Agregar 60ml de Tequila.",
            "Agregar 30ml de Licór de Café.",
            "Revolver con una cucharita."
         ],
         "imagen": "url(imgs/dishes-icons/BraveBull.png)",
         "headerImage": "imgs/dishes/Brave Bull.svg",
         "favorite": false
      },
      {
         "name": "Bull",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Jugo de Limón",
            "Jarabe",
            "Stout",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en un vaso largo, o en una copa fantasía, 45ml de Ron.",
            "Agregar 30ml Jugo de Limón.",
            "Agregar 30ml de Jarabe.",
            "Mezclar con una cuchara.",
            "Llenar el vaso con Hielo.",
            "LLenar a tope con la cerveza Stout.",
            "Decorar a gusto."
         ],
         "imagen": "url(imgs/dishes-icons/Bull.png)",
         "headerImage": "imgs/dishes/Bull.svg",
         "favorite": false
      },
      {
         "name": "Butterfly",
         "label": "refrescante",
         "ingredients": [
            "Chardonnay",
            "Jarabe de Ananá",
            "Jugo de Pomelo",
            "Miel",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 60ml de Chardonnay.",
            "Agregar 30ml de Jarabe de Ananá.",
            "Agregar 30ml de Jugo de Pomelo y miel a gusto.",
            "Agitar fuertemente.",
            "Servir la preparación colada.",
            "Decorar con flores."
         ],
         "imagen": "url(imgs/dishes-icons/Butterfly.png)",
         "headerImage": "imgs/dishes/Butterfly.svg",
         "favorite": false
      },
      {
         "name": "Caipiroska",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Azúcar",
            "Lima",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Verter en un vaso 25g azúcar y media Lima rebanada en trozos.",
            "Triturar ambos ingredients con un mortero.",
            "Agregar al vaso varios hielos (enteros o picados).",
            "Agregar 50ml de Vodka.",
            "Utilizar una cuchara para subir las limas.",
            "Añadir más Hielo hasta cubrir el borde."
         ],
         "imagen": "url(imgs/dishes-icons/caipiroska.png)",
         "headerImage": "imgs/dishes/caipiroska.svg",
         "favorite": false
      },
      {
         "name": "Caipiroska de fresa",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Frutilla",
            "Lima",
            "Azúcar Moreno",
            "Gaseosa Lima Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en un vaso 25g de azúcar y media Lima rebanada en trozos.",
            "Triturar ambos ingredients con un mortero.",
            "Agregar 5 futillas y triturar nuevamente.",
            "Colocar en un vaso varios hielos (enteros o picados).",
            "Agregar 50ml de Vodka.",
            "Utilizar una cuchara para subir las limas.",
            "Añadir más Hielo hasta cubrir el borde."
         ],
         "imagen": "url(imgs/dishes-icons/caipiroskaDeFresa.png)",
         "headerImage": "imgs/dishes/caipiroska de fresa.svg",
         "favorite": false
      },
      {
         "name": "Campari Orange",
         "label": "refrescante",
         "ingredients": [
            "Campari",
            "Jugo de Naranja"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso alto Hielo.",
            "Agregar 30ml de Campari.",
            "Agregar 90ml de Jugo de Naranja.",
            "Decorar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/CampariOrange.png)",
         "headerImage": "imgs/dishes/Campari Orange.svg",
         "favorite": false
      },
      {
         "name": "Campari Spritz",
         "label": "aperitivo",
         "ingredients": [
            "Campari",
            "Soda",
            "Champagne"
         ],
         "cookTime": 30,
         "recipe": [
            "Agregar en un vaso de vino 2 partes de Campari.",
            "Agregar 3 partes de Champagne.",
            "Agregar 1 parte de Soda.",
            "Decorar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/CampariSpritz.png)",
         "headerImage": "imgs/dishes/Campari Spritz.svg",
         "favorite": false
      },
      {
         "name": "Campari Tonic",
         "label": "refrescante",
         "ingredients": [
            "Campari",
            "Agua Tónica",
            "Limón",
            "Hielos"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una copa balón Hielo.",
            "Agregar 1 parte de Campari.",
            "Agregar 3 o 4 partes de Tónica.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/CampariTonic.png)",
         "headerImage": "imgs/dishes/CAMPARI TONIC.svg",
         "favorite": false
      },
      {
         "name": "Cerveza Especiada",
         "label": "refrescante",
         "ingredients": [
            "Stout",
            "Miel",
            "Jengibre",
            "Pimienta",
            "Clavos de olor",
            "Canela"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una olla 1 litro de cerveza Stout.",
            "Agregar 2 cucharadas de miel.",
            "Agregar 1 trozo de 1cm de jegibre.",
            "Agregar una pisca de pimienta.",
            "Agregar 3 o 4 clavos de olor y un poco de canela.",
            "Calentar hasta que hierva.",
            "Dejar reposar hasta que se enfrie y colar."
         ],
         "imagen": "url(imgs/dishes-icons/CervezaEspeciada.png)",
         "headerImage": "imgs/dishes/Cerveza especiada.svg",
         "favorite": false
      },
      {
         "name": "Cerveza Matadora",
         "label": "refrescante",
         "ingredients": [
            "Golden",
            "Tequila Reposado",
            "Jugo de Limón",
            "Jarabe",
            "Fresas",
            "Albahaca",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera 2 o 4 hojas de Albahaca.",
            "Agregar 15ml de Jarabe.",
            "Aplastar suavemente con un mortero.",
            "Añadir 30ml de Jugo de Limón y 60ml Tequila.",
            "Llenar la coctelera con hielos y agitar unos 12 segundos.",
            "Filtrar la mezcla y pasarla a la coctelera.",
            "Completar el resto de la coctelera con la cerveza fría."
         ],
         "imagen": "url(imgs/dishes-icons/CervezaMatadora.png)",
         "headerImage": "imgs/dishes/Cerveza Matadora.svg",
         "favorite": false
      },
      {
         "name": "Chemical Brothers",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Jugo de Uva",
            "Jugo de Limón",
            "Soda",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera 3 partes de Gancia.",
            "Agregar 7 partes de Jugo de Uva y jugo de 1 Limón.",
            "Batir 30 segundos.",
            "Incorporar todo el contenido de la coctelera en un vaso de trago largo con 3/4 partes de Hielo.",
            "Completar con Soda.",
            "Decorar con un trozo de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/ChemicalBrothers.png)",
         "headerImage": "imgs/dishes/Chemical Brothers.svg",
         "favorite": false
      },
      {
         "name": "Cinco Herradura",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Ananá",
            "Jugo de Arándano",
            "Gaseosa Lima Limón",
            "Jugo de Limón",
            "Azúcar"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso alto tipo tubo hielos.",
            "Agregar  28ml de Tequila.",
            "Agregar 112ml de Jugo de Ananá.",
            "Agregar 112ml de Jugo de Arándano y un toque de Gaseosa Lima Limón.",
            "Revolver para mezclar.",
            "Agregar el toque de Limón y mezclar otra vez.",
            "Puedes agrear azucar (opcional).",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/CincoHerradura.png)",
         "headerImage": "imgs/dishes/Cinco Herradura.svg",
         "favorite": false
      },
      {
         "name": "Clericó",
         "label": "refrescante",
         "ingredients": [
            "Champagne",
            "Melocotón",
            "Ciruela",
            "Limón",
            "Crema de Cassis",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Cortar en trocitos 1 melocotón y 2 ciruelas.",
            "Agregar unas gotas de Jugo de Limón y la crema de Cassis.",
            "Revolver y agregar Hielo.",
            "Verter poco a poco 330ml de Champagne.",
            "Revolver todo el contenido con cuidado.",
            "Servir en copas de tipo flautas o en vasos cortos tipo old fashion."
         ],
         "imagen": "url(imgs/dishes-icons/Clerico.png)",
         "headerImage": "imgs/dishes/Clerico.svg",
         "favorite": false
      },
      {
         "name": "Clover Club",
         "label": "refrescante",
         "ingredients": [
            "Dry Gin",
            "Jarabe de Frambuesa",
            "Vermouth Seco",
            "Jugo de Limón",
            "Huevo",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Dry Gin.",
            "Agregar 20ml de Jarabe de Frambuesa.",
            "Agregar 20ml de Vermouth Seco.",
            "Agregar 20ml de Jugo de Limón y 1 clara de Huevo.",
            "Agitar fuertemente unos 15 segundos.",
            "Colar en una copa flaut.",
            "Adornar con unas frambuesas."
         ],
         "imagen": "url(imgs/dishes-icons/cloverClub.png)",
         "headerImage": "imgs/dishes/clover club.svg",
         "favorite": false
      },
      {
         "name": "Cóctel Mónaco",
         "label": "refrescante",
         "ingredients": [
            "Agua",
            "Rubia Lager",
            "Granadina",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso alto Hielo.",
            "Agregar 15ml de Granadina.",
            "Agregar 150ml de Cerveza Rubia Lager.",
            "Completar con 150ml de Agua."
         ],
         "imagen": "url(imgs/dishes-icons/CoctelMonaco.png)",
         "headerImage": "imgs/dishes/Cóctel Mónaco.svg",
         "favorite": false
      },
      {
         "name": "Colt 45",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Gin",
            "Energizante",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso Hielo.",
            "Agregar 30ml de Gin.",
            "Agregar 60ml de Jägermeister.",
            "Completar con 150ml de Energizante.",
            "Mezclar con una cuchara."
         ],
         "imagen": "url(imgs/dishes-icons/Colt45.png)",
         "headerImage": "imgs/dishes/Colt 45.svg",
         "favorite": false
      },
      {
         "name": "Cool Cucumber Saison",
         "label": "refrescante",
         "ingredients": [
            "Rubia Ale",
            "Jugo de Limón",
            "Pepino",
            "Menta",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 2 rodajas de Pepino.",
            "Agregar 3 hojas de Menta.",
            "Agitar durante unos segundos.",
            "Servir solo el Jugo de Limón en un vaso de media pinta o una copa Tulipa.",
            "Suavemente verter la cerveza.",
            "Remover ligeramente.",
            "Decorar con una rodaja de Limón y una hoja de Menta."
         ],
         "imagen": "url(imgs/dishes-icons/CoolCucumberSaison.png)",
         "headerImage": "imgs/dishes/Cool Cucumber Saison.svg",
         "favorite": false
      },
      {
         "name": "Cosmopolitan",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Granadina",
            "Triple Sec",
            "Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir dentro de una coctelera Hielo.",
            "Agregar 105ml de Vodka.",
            "Agitar durante unos segundos.",
            "Añador 75ml de licor de Naranja y jugo de 1 Limón.",
            "Agitar de nuevamente.",
            "Por último incorporar 100ml de jugo de Arándanos.",
            "Mezclar y servir en una copa grande."
         ],
         "imagen": "url(imgs/dishes-icons/cosmopolitan.png)",
         "headerImage": "imgs/dishes/cosmopolitan.svg",
         "favorite": false
      },
      {
         "name": "Cuba libre",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Gaseosa Cola",
            "Jugo de Lima",
            "Hielo",
            "Lima"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso 3 cubos de Hielo.",
            "Agregar 45ml de Ron Blanco.",
            "Completar con 90ml de Gaseosa Cola.",
            "Exprimir el jugo de una rodaja de Lima.",
            "Mezclar.",
            "Decorar con media rodaja de Lima."
         ],
         "imagen": "url(imgs/dishes-icons/CubaLibre.png)",
         "headerImage": "imgs/dishes/Cuba libre.svg",
         "favorite": false
      },
      {
         "name": "Daiquiri",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Jugo de Lima",
            "Jarabe",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 45ml de Ron Blanco.",
            "Agregar 25ml de Jugo de Lima.",
            "Agregar 15ml de Jarabe (fruta a elección).",
            "Agitar bien para mezclar los ingredients y que el Hielo se escarche.",
            "Servir en una copa de tipo Martini, enfriada previamente.",
            "Utilizar un colador al verter el líquido.",
            "Posteriormente escarchar el borde de la copa con azúcar y se decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/Daiquiri.png)",
         "headerImage": "imgs/dishes/Daiquiri.svg",
         "favorite": false
      },
      {
         "name": "Dama blanca",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Triple Sec",
            "Jugo de Limón",
            "Jarabe",
            "Huevo",
            "Limón"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 50ml de Gin.",
            "Agregar 15ml de Triple Sec.",
            "Agregar 30ml de Jugo de Limón.",
            "Agregar 25ml de Jarabe y 1 clara de huevo.",
            "Agitar fuertemente por unos 15-20 segundos.",
            "Colar el líquido en un vaso frío.",
            "Decorar con la ralladura de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/damaBlanca.png)",
         "headerImage": "imgs/dishes/dama blanca.svg",
         "favorite": false
      },
      {
         "name": "Deer & Beer",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Rubia Lager"
         ],
         "cookTime": 30,
         "recipe": [
            "Servir el Jägermeister helado en un vaso de chupito.",
            "Servir la cerveza fría en un vaso de cerveza.",
            "Tomar el Jägermeister y después disfrutar la cerveza."
         ],
         "imagen": "url(imgs/dishes-icons/DEERBEER.png)",
         "headerImage": "imgs/dishes/DEER_BEER.svg",
         "favorite": false
      },
      {
         "name": "Délice & pepino",
         "label": "refrescante",
         "ingredients": [
            "Champagne",
            "Pepino",
            "Albahaca",
            "Pomelo",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un copón abundante Hielo.",
            "Agregar la piel del Pepino.",
            "Completar con el Champagne.",
            "Revolver.",
            "Decorar con una rodaja de Pomelo y hojas de Albahaca."
         ],
         "imagen": "url(imgs/dishes-icons/DelicePepino.png)",
         "headerImage": "imgs/dishes/Delice_pepino.svg",
         "favorite": false
      },
      {
         "name": "Destornillador",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Jugo de Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Llenar un vaso con Hielo.",
            "Agregar 50ml de Vodka.",
            "Llenar el vaso de Juego de Naranja.",
            "Mezclar.",
            "Adornar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/Destornillador.png)",
         "headerImage": "imgs/dishes/Destornillador.svg",
         "favorite": false
      },
      {
         "name": "Disparo Caliente",
         "label": "digestivo",
         "ingredients": [
            "Jägermeister",
            "Tequila Blanco",
            "Salsa Tabasco"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un chupito 2 partes de Jägermeister.",
            "Agregar 2 partes de Tequila.",
            "Agregar 1/2 parte de salsa tabasco.",
            "Revolver con una cuchara."
         ],
         "imagen": "url(imgs/dishes-icons/DisparoCaliente.png)",
         "headerImage": "imgs/dishes/Disparo caliente.svg",
         "favorite": false
      },
      {
         "name": "Dolce Vita",
         "label": "refrescante",
         "ingredients": [
            "Americano Gancia",
            "Champagne",
            "Bitter Aromático",
            "Piel de Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una copa Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar 1 parte y media de Champagne.",
            "Terminar con unas gotas de Bitter Aromático.",
            "Decorar con una piel de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/DolceVita.png)",
         "headerImage": "imgs/dishes/Dolce Vita.svg",
         "favorite": false
      },
      {
         "name": "El monstruo del lago Ness",
         "label": "digestivo",
         "ingredients": [
            "Jägermeister",
            "Baileys",
            "Licor de Melón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Verter en una copa de tipo cordial 2 partes de Baileys.",
            "Añadir lentamente, con mucho cuidado, 2 partes de Licor de Melón, dejándolo caer suavemente por el borde de la copa para que estos no se mezclen.",
            "Incorporar 2 partes de Jägermeister utilizando el mismo procedimiento que con el Licor de Melón."
         ],
         "imagen": "url(imgs/dishes-icons/ElMonstruoDelLagoNess.png)",
         "headerImage": "imgs/dishes/El monstruo del lago Ness.svg",
         "favorite": false
      },
      {
         "name": "Energizante Jäger",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Energizante",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso de tipo Highball Hielo.",
            "Agregar 1 parte de Jägermeister.",
            "Completar con Energizante.",
            "Decorar con un trozo de cáscara de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/EnergizanteJager.png)",
         "headerImage": "imgs/dishes/Energizante Jäger.svg",
         "favorite": false
      },
      {
         "name": "Espuma Dorada",
         "label": "refrescante",
         "ingredients": [
            "Rubia Lager",
            "Champagne",
            "Licor de Melón"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una jarra, o copa balón, 500ml de cerveza Rubia Lager.",
            "Agregar 500ml de Champagne.",
            "Agregar 1 chupito de Licor de Melón."
         ],
         "imagen": "url(imgs/dishes-icons/EspumaDorada.png)",
         "headerImage": "imgs/dishes/Espuma dorada.svg",
         "favorite": false
      },
      {
         "name": "Fernet Cola",
         "label": "digestivo",
         "ingredients": [
            "Fernet",
            "Gaseosa Cola",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso Hielo.",
            "Agregar un 30% de Fernet.",
            "Completar con un 70% de Gaseosa Cola."
         ],
         "imagen": "url(imgs/dishes-icons/FernetCola.png)",
         "headerImage": "imgs/dishes/FernetCola.svg",
         "favorite": false
      },
      {
         "name": "French 75",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Jugo de Limón",
            "Azúcar Impalpable",
            "Champagne",
            "Hielo",
            "Limón"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 90ml de Gin.",
            "Agregar 90ml de Jugo de Limón y 4 cdtas de azúcar impalpable.",
            "Agitar fuertemente durante unos 20 segundos.",
            "Servir en dos copas flauta (previamente enfriadas).",
            "Rellenar con el Champagne.",
            "Adornar con una cáscara de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/french75.png)",
         "headerImage": "imgs/dishes/french 75.svg",
         "favorite": false
      },
      {
         "name": "Fright Night In The Groove",
         "label": "aperitivo",
         "ingredients": [
            "Jägermeister",
            "Tequila Blanco",
            "Jarabe",
            "Jugo de Pomelo",
            "Pomelo",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Jägermeister.",
            "Agregar 15ml de Tequila.",
            "Agregar 15ml de Jarabe.",
            "Completar con 30ml de Jugo de Pomelo.",
            "Agitar fuertemente.",
            "Verter el líquido en un vaso chico de Whisky.",
            "Decorar con una rodaja de Pomelo."
         ],
         "imagen": "url(imgs/dishes-icons/FrightNightInTheGroove.png)",
         "headerImage": "imgs/dishes/Fright Night In The Groove.svg",
         "favorite": false
      },
      {
         "name": "Gancia Coloradito",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Jugo de Naranja",
            "Campari",
            "Azúcar Impalpable",
            "Hielo",
            "Menta"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera 6 partes de Americano Gancia.",
            "Agregar 2 partes de Jugo de Naranja.",
            "Agregar 2 partes de Campari y 1/2 cucharada de azucar impalpable.",
            "Agitar durante unos segundos.",
            "Servir en vaso de trago corto con Hielo.",
            "Decorar con unas hojas de Menta."
         ],
         "imagen": "url(imgs/dishes-icons/GanciaColoradito.png)",
         "headerImage": "imgs/dishes/Gancia coloradito.svg",
         "favorite": false
      },
      {
         "name": "Gancia con Pomelo",
         "label": "refrescante",
         "ingredients": [
            "Americano Gancia",
            "Gaseosa Pomelo",
            "Pomelo",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Completar con Gaseosa Pomelo.",
            "Decorar con media rodaja de Pomelo."
         ],
         "imagen": "url(imgs/dishes-icons/GanciaConPomelo.png)",
         "headerImage": "imgs/dishes/Gancia con pomelo.svg",
         "favorite": false
      },
      {
         "name": "Gancia Frozen de Frutilla",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Azúcar",
            "Pulpa de Frutilla",
            "Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 1 medida de Americano Gancia y 1 cucharada de azucar.",
            "Agitar durante unos segundos.",
            "Servir en un vaso largo.",
            "Completar con Pulpa de Frutilla y el jugo de de un gajo de Limón.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/GanciaFrozenDeFrutilla.png)",
         "headerImage": "imgs/dishes/Gancia frozen de frutilla.svg",
         "favorite": false
      },
      {
         "name": "Gancia Tangerine",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Americano Gancia",
            "Mandarina",
            "Soda",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Agregar 4 partes de Vodka.",
            "Agregar 2 partes de jugo de Mandarina.",
            "Completar con Soda.",
            "Decorar con tres gajos de Mandarina."
         ],
         "imagen": "url(imgs/dishes-icons/GanciaTangerine.png)",
         "headerImage": "imgs/dishes/Gancia Tangerine.svg",
         "favorite": false
      },
      {
         "name": "Gin Fizz",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Jugo de Limón",
            "Jarabe",
            "Soda",
            "Hielo",
            "Limón"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Gin.",
            "Agregar 30ml de Jugo de Limón.",
            "Completar con 20ml Jarabe.",
            "Agitar vigorosamente hasta obtener un líquido espumoso.",
            "Servir en un vaso con cubitos de Hielo.",
            "Añadir Soda para rellenar.",
            "Decorar con una cáscara de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/ginFizz.png)",
         "headerImage": "imgs/dishes/gin fizz.svg",
         "favorite": false
      },
      {
         "name": "Gin Tonic",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Agua Tónica",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso Hielo.",
            "Agregar 30% de Gin.",
            "Completar con Agua Tónica.",
            "Mezclar todo."
         ],
         "imagen": "url(imgs/dishes-icons/ginTonic.png)",
         "headerImage": "imgs/dishes/gin tonic.svg",
         "favorite": false
      },
      {
         "name": "Golden Peach",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Duraznos en Lata",
            "Jugo de Naranja",
            "Durazno",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en la licuadora 2/3 de lata de conserva de duraznos.",
            "Agregar 120ml Jugo de Naranja.",
            "Agregar 120ml de Ron Blanco y Hielo.",
            "Licuar durante un minuto o hasta que la mezcla quede uniforme.",
            "Servir en vasos altos.",
            "Decorar el trago con una rodaja de Durazno."
         ],
         "imagen": "url(imgs/dishes-icons/goldenPeach.png)",
         "headerImage": "imgs/dishes/golden peach.svg",
         "favorite": false
      },
      {
         "name": "Hemingway Special",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Jugo de Pomelo",
            "Marrasquino",
            "Jugo de Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 60ml de Ron Blanco.",
            "Agregar 40ml de Jugo de Pomelo.",
            "Agregar 15ml de Marrasquino.",
            "Completar con 15ml de Jugo de Limón.",
            "Agitar para mezclarlos bien.",
            "Servir en una copa clásica de cóctel enfriada previamente.",
            "Normalmente no se decora, pero puede admitir una rodajita de Limón o de Ananá en el borde."
         ],
         "imagen": "url(imgs/dishes-icons/HemingwaySpecial.png)",
         "headerImage": "imgs/dishes/Hemingway Special.svg",
         "favorite": false
      },
      {
         "name": "Hop Collins",
         "label": "refrescante",
         "ingredients": [
            "Ginebra Seca",
            "Jugo de Limón",
            "Jarabe",
            "American IPA",
            "Frambuesa",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Ginebra Seca.",
            "Agregar 30ml de Jugo de Limón.",
            "Completar con 30ml de Jarabe.",
            "Agitar con fuerza.",
            "Servir en un vaso alto tubular tipo Collins con un par de hielos.",
            "Añadir suavemente la cerveza American IPA hasta llenar el vaso.",
            "Decorar con frambuesas"
         ],
         "imagen": "url(imgs/dishes-icons/HopCollins.png)",
         "headerImage": "imgs/dishes/Hop Collins.svg",
         "favorite": false
      },
      {
         "name": "Horno Bull",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso largo Hielo.",
            "Agregar 50ml de Tequila.",
            "Completar con Jugo de Naranja.",
            "Mezclar."
         ],
         "imagen": "url(imgs/dishes-icons/HornoBull.png)",
         "headerImage": "imgs/dishes/Horno Bull.svg",
         "favorite": false
      },
      {
         "name": "Jäger Tonic",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Agua Tónica",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una copa alargada 90ml de Jägermeister.",
            "Completar con Tónica.",
            "Añadir dos cubitos de Hielo y una rodaja de Naranja.",
            "Decorar la copa con una rodaja de Naranja en el borde."
         ],
         "imagen": "url(imgs/dishes-icons/JagerTonic.png)",
         "headerImage": "imgs/dishes/JÄGER TONIC.svg",
         "favorite": false
      },
      {
         "name": "Jägermeister Tea",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Té",
            "Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir 60ml de Jägermeister en una jarra de cerveza con Hielo.",
            "Completar con Té.",
            "Revolver.",
            "Adornar con un trocito de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/JaggerTea.png)",
         "headerImage": "imgs/dishes/Jagger Tea.svg",
         "favorite": false
      },
      {
         "name": "Juan Collins",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Azúcar",
            "Soda",
            "Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso tipo tubo Hielo.",
            "Añadir 4,5 partes de Tequila.",
            "Añadir 1,5 parte de Jugo de Limón.",
            "Añadir 1 cdta. de Azúcar.",
            "Completar con 9 partes Soda.",
            "Decorar con la cuña de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/JuanCollins.png)",
         "headerImage": "imgs/dishes/Juan Collins.svg",
         "favorite": false
      },
      {
         "name": "Kaffee",
         "label": "digestivo",
         "ingredients": [
            "Jägermeister",
            "Café Cold Brew",
            "Café Molido",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Preparar Café Cold Brew con anticipación.",
            "Añadir en la coctelera 1 parte de Jägermeister.",
            "Completar 1 parte de Café Cold Brew.",
            "Agitar bien.",
            "Servir cuidadosamente en una taza de espresso transparente.",
            "Espolvorear un poco de Café molido sobre la taza."
         ],
         "imagen": "url(imgs/dishes-icons/KAFFEE.png)",
         "headerImage": "imgs/dishes/KAFFEE.svg",
         "favorite": false
      },
      {
         "name": "Limone",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Gaseosa Lima Limón",
            "Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso de trago largo Hielo.",
            "Agregar 2 partes de Americano Gancia.",
            "Completar con Gaseosa Lima Limón.",
            "Decorar con un gajo de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/Limone.png)",
         "headerImage": "imgs/dishes/Limone.svg",
         "favorite": false
      },
      {
         "name": "Long Island Iced Tea",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Vodka",
            "Ron Blanco",
            "Gin",
            "Triple Sec",
            "Jarabe",
            "Jugo de Limón",
            "Gaseosa Cola",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso alto unos 4 cubos de Hielo.",
            "Agregar 30ml Vodka.",
            "Agregar 30ml Tequila.",
            "Agregar 30ml Ron.",
            "Agregar 30ml Gin.",
            "Agregar 15ml Triple Sec.",
            "Completar con 30ml Jugo de Limón y 20ml de Jarabe.",
            "Mezclar todos los ingredients.",
            "Por último vertir lentamente el Gaseosa Cola hasta completar.",
            "Decorar con un trozo de Limón o Lima y añadir una bombilla."
         ],
         "imagen": "url(imgs/dishes-icons/LongIslandIcedTea.png)",
         "headerImage": "imgs/dishes/long island iced tea.svg",
         "favorite": false
      },
      {
         "name": "Long Island Iced Tea (Ron)",
         "label": "aperitivo",
         "ingredients": [
            "Tequila Blanco",
            "Vodka",
            "Ron Blanco",
            "Tripe sec",
            "Ginebra",
            "Jugo de Limón",
            "Jarabe",
            "Gaseosa Cola",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso largo (Highball o vaso Collins) Hielo.",
            "Agregar 15ml de Tequila.",
            "Agregar 15ml de Vodka.",
            "Agregar 15ml de Ron Blanco.",
            "Agregar 15ml de Triple Sec.",
            "Agregar 15ml de Ginebra.",
            "Agregar 25ml de Jugo de Limón.",
            "Complitar con 30ml de Jarabe y un toque de Gaseosa Cola.",
            "Mezclar bien.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/LongIslandIcedTea.png)",
         "headerImage": "imgs/dishes/long island iced tea.svg",
         "favorite": false
      },
      {
         "name": "Mai Tai",
         "label": "digestivo",
         "ingredients": [
            "Ron Blanco",
            "Ron Oscuro",
            "Curaçao de Naranja",
            "Jarabe de Almendra",
            "Jugo de Lima",
            "Granadina",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 40ml de Ron Blanco.",
            "Agregar 20ml de Ron Oscuro.",
            "Agregar 15ml de Curaçao de Naranja.",
            "Agregar 15ml de Jarabe de Almendra.",
            "Agregar 10ml de Jugo de Limón.",
            "Completar con 10ml de Granadina.",
            "Mezclar bien.",
            "Servir el liquido colado en un vaso o copa llena de Hielo.",
            "Rellenar con Soda.",
            "Decorar con una rodaja de Lima, o de Ananá, y con una sombrilla."
         ],
         "imagen": "url(imgs/dishes-icons/MaiTai.png)",
         "headerImage": "imgs/dishes/Mai Tai.svg",
         "favorite": false
      },
      {
         "name": "Manhattan",
         "label": "aperitivo",
         "ingredients": [
            "Vermouth Dulce",
            "Whisky",
            "Angostura",
            "Naranja",
            "Cereza",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 7ml de Angostura.",
            "Agregar 90ml de Whisky.",
            "Completar con 22ml de Vermouth Dulce.",
            "Revolver con una varilla.",
            "Introducir las cerezas para darle ese color especial.",
            "Decorar con la Cereza y una cáscara de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/Manhattan.png)",
         "headerImage": "imgs/dishes/Manhattan.svg",
         "favorite": false
      },
      {
         "name": "Margachela o Margarita Miami",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Triple Sec",
            "Jugo de Limón",
            "Pale Lager",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una licuadora 45ml de Tequila",
            "Agregar 30ml de licor Triple Sec.",
            "Agregar 30ml de Jugo de Limón y el Hielo.",
            "Prender la licuadora hasta que quede como una nieve.",
            "Servir en una copa escarchada con sal.",
            "Para finalizar, destapar las cervezas y colocarlas boca abajo en el trago."
         ],
         "imagen": "url(imgs/dishes-icons/Margachela.png)",
         "headerImage": "imgs/dishes/MargachelaPNG.png",
         "favorite": false
      },
      {
         "name": "Margarita de Pepino",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Pepino",
            "Jugo de Limón",
            "Jarabe",
            "Hielo",
            "Pepino"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Tequila.",
            "Agregar 60ml de Jugo de Pepino.",
            "Agregar 30ml de Jugo de Limón.",
            "Completar con 30ml de Jarabe.",
            "Agitar fuerte.",
            "Servir en una copa con Hielo.",
            "Decorar con unas tiritas de Pepino."
         ],
         "imagen": "url(imgs/dishes-icons/MargaritaDePepino.png)",
         "headerImage": "imgs/dishes/Margarita De Pepino.svg",
         "favorite": false
      },
      {
         "name": "Margarita de Sandía",
         "label": "refrescante",
         "ingredients": [
            "Sandía",
            "Sal",
            "Jugo de Limón",
            "Licor de flor de Saúco",
            "Tequila Blanco",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una licuadora 680g de Sandía en trozos.",
            "Agregar 177ml de Jugo de Limón.",
            "Agregar 1/4 de cucharadita de Sal.",
            "Agregar 44ml de Licor de flor de Saúco.",
            "Licuar hasta que se formé un puré.",
            "Tamizar el puré suave usando un paño fino o un colador, presionando con una cuchara.",
            "Luego guardar en la nevera.",
            "Servir en vasos con hielos."
         ],
         "imagen": "url(imgs/dishes-icons/MargaritaDeSandia.png)",
         "headerImage": "imgs/dishes/Margarita de sandia.svg",
         "favorite": false
      },
      {
         "name": "Margarita Shandy",
         "label": "refrescante",
         "ingredients": [
            "Jugo de Limón",
            "Tequila Reposado",
            "Agua",
            "Limón",
            "Golden",
            "Sal",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una jarra grande 320ml de Jugo de Limón.",
            "Agregar 236ml de Tequila.",
            "Completar con 350ml agua.",
            "Revolver.",
            "Añadir una pizca de sal.",
            "Enfriar durante 6 horas.",
            "Antes de servir llenar la jarra con Hielo, rodajas de Limón y añadir la cerveza Golden muy fría."
         ],
         "imagen": "url(imgs/dishes-icons/margaritaShandy.png)",
         "headerImage": "imgs/dishes/Margarita shandy.svg",
         "favorite": false
      },
      {
         "name": "Martini Coctel",
         "label": "aperitivo",
         "ingredients": [
            "Gin",
            "Vermouth",
            "Aceituna",
            "Limón",
            "Agua",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 75ml de Gin.",
            "Agregar 30ml de Vermouth.",
            "Revolver lentamente por un minuto.",
            "Servir en una copa Martini previamente enfriada sin dejar caer los hielos.",
            "Exprimir la cáscara de limón en la superficie.",
            "Para decorar poner 1-3 aceitunas en un palillo y agregar al Martini."
         ],
         "imagen": "url(imgs/dishes-icons/martiniCoctel.png)",
         "headerImage": "imgs/dishes/martini coctel.svg",
         "favorite": false
      },
      {
         "name": "Mary Pickford",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Marrasquino",
            "Jugo de Ananá",
            "Granadina",
            "Cereza",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Ron Blanco.",
            "Agregar 10ml de Marrasquino.",
            "Agregar 60ml de Jugo de Ananá natural.",
            "Completar con 10ml de Granadina.",
            "Agitar la coctelera y se deja reposar durante un breve tiempo.",
            "Servir en una copa de cóctel fría.",
            "Decorar el vaso con una Cereza de cóctel."
         ],
         "imagen": "url(imgs/dishes-icons/MaryPickford.png)",
         "headerImage": "imgs/dishes/Mary pickford.svg",
         "favorite": false
      },
      {
         "name": "Mexican Mule",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Lima",
            "Jarabe",
            "Gaseosa Ginger Beer",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso alto Hielo picado hasta la mitad aproximadamente.",
            "Exprimir media Lima",
            "Agregar 8ml de Jarabe.",
            "Completar con 45ml Tequila.",
            "Mezclar todo.",
            "Añadir más Hielo picado hasta arriba y rellenar con la Gaseosa de Ginger Beer.",
            "Decorar con Lima."
         ],
         "imagen": "url(imgs/dishes-icons/MexicanMule.png)",
         "headerImage": "imgs/dishes/Mexican mule.svg",
         "favorite": false
      },
      {
         "name": "Mojito",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Jugo de Lima",
            "Menta",
            "Azúcar",
            "Soda",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso dos cucharadas de azúcar.",
            "Agregar 6 ramas de Menta.",
            "Agregar 30ml de Lima.",
            "Machacar todo conjuntamente mezclando bien los ingredients.",
            "Agregar un chorrito de Soda y rellenar el vaso con Hielo picado.",
            "Finalmente añadir 40ml de Ron y terminar de llenar el vaso con Soda.",
            "Decorar con hojas de Menta y una rodaja de Lima o de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/Mojito.png)",
         "headerImage": "imgs/dishes/Mojito.svg",
         "favorite": false
      },
      {
         "name": "Mojito Con Cerveza",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Limón",
            "Azúcar",
            "Menta",
            "Rubia Lager",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Cortar 1/2 Limón en cuartos e incorpóralos en un vaso.",
            "Colocar 2 o 3 cucharadas de azúcar y machacar suavemente para extraer el jugo.",
            "Agregar las hojas de menta y presionar un poco más hasta que toda se mezcle bien.",
            "Vertir 45ml de Ron Blanco y revolver con una cucharita.",
            "Llenar el vaso añadiéndole media taza de Hielo triturado.",
            "Revolver y completar con la cerveza Rubia Lager.",
            "Decorar con una ramita de Menta."
         ],
         "imagen": "url(imgs/dishes-icons/MojitoConCerveza.png)",
         "headerImage": "imgs/dishes/Mojito con cerveza.svg",
         "favorite": false
      },
      {
         "name": "Negroni",
         "label": "aperitivo",
         "ingredients": [
            "Gin",
            "Campari",
            "Vermouth Rosso",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso old fashion 3 cubos de Hielo.",
            "Agregar 30ml Gin.",
            "Agregar 30ml Campari.",
            "Completar con 30ml Vermouth Rosso.",
            "Revolver por 30 segundos.",
            "Decorar con una cáscara de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/negroni.png)",
         "headerImage": "imgs/dishes/negroni.svg",
         "favorite": false
      },
      {
         "name": "Nieblas del Caribe",
         "label": "refrescante",
         "ingredients": [
            "Tequila Reposado",
            "Jugo de Ananá",
            "Jugo de Naranja",
            "Curaçao Azul"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso alto 2 hielos.",
            "Agregar 30ml de Tequila Reposado.",
            "Agregar 125ml de Jugo de Ananá.",
            "Agregar 125ml de Jugo de Naranja.",
            "Rellenar con 15ml Curaçao Azul.",
            "Decorar con un trozo de Ananá."
         ],
         "imagen": "url(imgs/dishes-icons/NieblasDelCaribe.png)",
         "headerImage": "imgs/dishes/Nieblas del Caribe.svg",
         "favorite": false
      },
      {
         "name": "Paloma",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Gaseosa de Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso highball escarchado con sal 3 cubos de Hielo.",
            "Agregar 100ml de Tequila Blanco.",
            "Agregar 50ml de Jugo de Limón.",
            "Luego añadir 100ml de Gaseosa de Naranja.",
            "Mezclar suavemente.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/Paloma.png)",
         "headerImage": "imgs/dishes/Paloma.svg",
         "favorite": false
      },
      {
         "name": "Pimps Up",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Martini Bitter",
            "Jarabe de Jengibre",
            "Gaseosa Lima Limón",
            "Limón",
            "Lima",
            "Pomelo",
            "Naranja",
            "Pepino",
            "Arándano",
            "Frutilla",
            "Menta",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una jarra Hielo.",
            "Agregar 1 limón, 3 limas, 1 pomelo, 1 naranja, 1/2 pepino, 1 puñado de arándanos y un puñado de frutillas, todos cortados.",
            "Incorporar 177ml de Gin.",
            "Agregar un dash de Bitter.",
            "Agregar 59ml de Jarabe.",
            "Completar con 1 lata de Gaseosa de Lima Limón.",
            "Mezclar bien.",
            "Servir en vasos con Hielo.",
            "Decorar con Pepino y Menta."
         ],
         "imagen": "url(imgs/dishes-icons/PimpsUp.png)",
         "headerImage": "imgs/dishes/Pimps Up.svg",
         "favorite": false
      },
      {
         "name": "Pink Ponch",
         "label": "refrescante",
         "ingredients": [
            "Plan B Rose",
            "Jugo de Manzana",
            "Jarabe de Frutos Rojos",
            "Jugo Lima",
            "Frutos Rojos",
            "Menta",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una jarra abundante Hielo.",
            "Agregar 500ml de Plan B Rose.",
            "Agregar 90ml de Jugo de Lima.",
            "Agregar 250ml de Jarabe de Frutos Rojos.",
            "Completar con 500ml de Jugo de Manzana.",
            "Mixear 100g frutos rojos y luego agregarlos a la jarra.",
            "Mezclar.",
            "Terminar con Menta fresca."
         ],
         "imagen": "url(imgs/dishes-icons/PinkPonch.png)",
         "headerImage": "imgs/dishes/Pink Ponch.svg",
         "favorite": false
      },
      {
         "name": "Piña Colada",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Jugo de Ananá",
            "Leche de Coco",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 30ml de Ron.",
            "Agregar 90ml de Jugo de Ananá.",
            "Completar con 30ml de Leche de Coco.",
            "Agitar fuertemente.",
            "Servir en un vaso Hurricane.",
            "Decorar con una rodajita de Ananá."
         ],
         "imagen": "url(imgs/dishes-icons/PinaColada.png)",
         "headerImage": "imgs/dishes/Piña colada.svg",
         "favorite": false
      },
      {
         "name": "Planter’s Punch",
         "label": "refrescante",
         "ingredients": [
            "Ron Oscuro",
            "Jugo de Naranja",
            "Jugo de Ananá",
            "Jugo de Limón",
            "Granadina",
            "Jarabe",
            "Amargo de Angostura",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 45ml de Ron Oscuro.",
            "Agregar 35ml de Jugo de Naranja.",
            "Agregar 35ml de Jugo Ananá.",
            "Agregar 20ml de Jugo de Limón.",
            "Agregar 10ml de Granadina.",
            "Completar 10ml de Jarabe.",
            "Agitar bien.",
            "Servir en un vaso largo o Hurricane con 2 o 3 hielos.",
            "Rellenar el vaso con 3 o 4 toques de Amargo de Angostura.",
            "Decorar con una Guinda de cóctel y también con una rodajita de Ananá en el borde."
         ],
         "imagen": "url(imgs/dishes-icons/PlantersPunch.png)",
         "headerImage": "imgs/dishes/Planters Punch.svg",
         "favorite": false
      },
      {
         "name": "Pomelo Sour",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Jugo de Pomelo",
            "Triple Sec",
            "Jugo de Limón",
            "Jarabe",
            "Huevo",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 45ml de Gin.",
            "Agregar 75ml de Jugo de Pomelo.",
            "Agregar 15ml de Triple Sec.",
            "Agregar 15ml de Jugo de Limón.",
            "Agregar 10ml de Jarabe.",
            "Completar con 1 clara de Huevo.",
            "Agitar fuertemente durante 30 segundos.",
            "Servir en un vaso (sin Hielo) y adornar a gusto"
         ],
         "imagen": "url(imgs/dishes-icons/pomeloSour.png)",
         "headerImage": "imgs/dishes/pomelo sour.svg",
         "favorite": false
      },
      {
         "name": "Purple Stag",
         "label": "digestivo",
         "ingredients": [
            "Té de Frutos",
            "Azúcar Impalpable",
            "Jägermeister",
            "Jugo de Limón",
            "Mermelada de Mora",
            "Mora",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir las moras en una coctelera.",
            "Agregar 10ml de la mermelada y agitar suavemente.",
            "Agregar 25ml de Té de Frutos.",
            "Agregar 50ml de Jägermeister.",
            "Completar con 25ml de Jugo de Limón y agitar.",
            "Colar y servir en un vaso con Hielo.",
            "Echar la Azúcar Impalpable por encima."
         ],
         "imagen": "url(imgs/dishes-icons/PurpleStag.png)",
         "headerImage": "imgs/dishes/PURPLE STAG.svg",
         "favorite": false
      },
      {
         "name": "Red Headed Chick",
         "label": "digestivo",
         "ingredients": [
            "Jägermeister",
            "Caña de Durazno",
            "Jugo de Arándano",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un cocterlera 30ml de Jägermeister.",
            "Agregar 30ml de Caña de Durazno.",
            "Agregar 60ml de Jugo de Arándano.",
            "Completar con Hielo.",
            "Agitar fuertemente.",
            "Servir en un vaso mediano tipo Vodka sour."
         ],
         "imagen": "url(imgs/dishes-icons/RedHeadedChick.png)",
         "headerImage": "imgs/dishes/Red Headed Chick.svg",
         "favorite": false
      },
      {
         "name": "Reservoir Dog",
         "label": "digestivo",
         "ingredients": [
            "Jägermeister",
            "Baileys",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso con cubitos de Hielo",
            "Agregar 50% de Baileys.",
            "Agregar 50% de Jägermeister.",
            "Dejar reposar la bebida durante unos minutos.",
            "Retirar los hielos y servir en un vaso ancho de Whisky."
         ],
         "imagen": "url(imgs/dishes-icons/ReservoirDog.png)",
         "headerImage": "imgs/dishes/RESERVOIR DOG.svg",
         "favorite": false
      },
      {
         "name": "Rob Roy",
         "label": "aperitivo",
         "ingredients": [
            "Whisky",
            "Vermouth Rosso",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera abundante Hielo.",
            "Agregar 60ml de Whisky.",
            "Agregar 30ml de Vermouth Rosso.",
            "Revolver durante 25 segundos con la ayuda de una cuchara larga.",
            "Servir en una copa estilo Martini previamente helada, pero sin colocarle Hielo.",
            "Decorar con piel de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/RobRoy.png)",
         "headerImage": "imgs/dishes/Rob Roy.svg",
         "favorite": false
      },
      {
         "name": "Rum Lemonade",
         "label": "refrescante",
         "ingredients": [
            "Ron Blanco",
            "Limonada",
            "Menta",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un recipiente 240ml de Ron Blanco.",
            "Agregar varias hojas de Menta.",
            "Tritúrar levemente.",
            "Añadir 720ml de limonada.",
            "Servir en vasos cortos con Hielo."
         ],
         "imagen": "url(imgs/dishes-icons/RumLemonade.png)",
         "headerImage": "imgs/dishes/Rum lemonade.svg",
         "favorite": false
      },
      {
         "name": "Ruso Negro",
         "label": "aperitivo",
         "ingredients": [
            "Vodka",
            "Licor de Café",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso varios hielos.",
            "Agregar 100ml Vodka.",
            "Agregar 50ml de Licor de Café.",
            "Por último mezclar todo."
         ],
         "imagen": "url(imgs/dishes-icons/rusoNegro.png)",
         "headerImage": "imgs/dishes/ruso negro.svg",
         "favorite": false
      },
      {
         "name": "Salty Chihuahua con Limón",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Limonada",
            "Jugo de Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso Hielo.",
            "Agregar 1,5 medida de Tequila.",
            "Agregar 5 medidas de limonada.",
            "Agregar 1 toque de Jugo de Limón.",
            "Revolver."
         ],
         "imagen": "url(imgs/dishes-icons/SaltyChihuahuaConLimon.png)",
         "headerImage": "imgs/dishes/Salty Chihuahua con limón.svg",
         "favorite": false
      },
      {
         "name": "Sandía con Vodka",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Gaseosa Lima Limón",
            "Limón",
            "Sandía",
            "Jugo de Frutilla"
         ],
         "cookTime": 30,
         "recipe": [
            "Cortar y calar una Sandía.",
            "Triturar parte de la pulpa y colocalar dentro de la Sandía.",
            "Verter 300ml de Vodka.",
            "Agregar Jugo de un Limón.",
            "Completar con Gaseosa Lima Limón.",
            "Puedes agregar Jugo de Frutilla a gusto."
         ],
         "imagen": "url(imgs/dishes-icons/sandiaConVodka.png)",
         "headerImage": "imgs/dishes/sandia con vodka.svg",
         "favorite": false
      },
      {
         "name": "Sangre y Arena",
         "label": "aperitivo",
         "ingredients": [
            "Whisky",
            "Vermouth Rosso",
            "Brandy",
            "Jugo de Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 22ml de Whisky.",
            "Agregar 22ml de Vermouth Rosso.",
            "Agregar 22ml de Brandy.",
            "Agregar 22ml de Jugo de Naranja.",
            "Agitar fuertemente.",
            "Colar y servir en vasos de cóctel bien fríos.",
            "Adornar con piel de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/SangreyArena.png)",
         "headerImage": "imgs/dishes/Sangre y Arena.svg",
         "favorite": false
      },
      {
         "name": "Sangría con Cerveza",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Triple Sec",
            "Jugo de Limón",
            "Jarabe de Durazno",
            "Hielo",
            "Duraznos en Jarabe",
            "Rubia Lager",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Verter en un vaso largo 45ml de Tequila.",
            "Agregar 30ml de licor Triple Sec.",
            "Agregar 30ml de Jugo de Limón.",
            "Agregar 30ml de Jarabe de Durazno.",
            "Mezclar con una cuchara y colocar Hielo hasta el tope.",
            "Finalmente rellenar con cerveza Rubia Lager.",
            "Decorar con los trozos de Durazno."
         ],
         "imagen": "url(imgs/dishes-icons/SangriaConCerveza.png)",
         "headerImage": "imgs/dishes/Sangria Con Cerveza.svg",
         "favorite": false
      },
      {
         "name": "Sangrita",
         "label": "refrescante",
         "ingredients": [
            "Jugo de Naranja",
            "Jugo de Tomate",
            "Jugo de Lima",
            "Salsa Picante Mexicana",
            "Pico de Gallo",
            "Tequila Blanco",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 125ml Jugo de Naranja.",
            "Agregar 125ml de Jugo de Tomate.",
            "Agregar 22,5ml de Jugo de Limón.",
            "Agregar 2,5ml de salsa picante.",
            "Agregar una cucharada de Pico de Gallo.",
            "Agitar bien.",
            "Servir y acompañar con un chupito de Tequila."
         ],
         "imagen": "url(imgs/dishes-icons/Sangrita.png)",
         "headerImage": "imgs/dishes/Sangrita.svg",
         "favorite": false
      },
      {
         "name": "Santo Limento",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Champagne",
            "Pepino",
            "Lima",
            "Menta",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una copa Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar un gajo de Lima exprimido.",
            "Completar con Champagne.",
            "Decorar con láminas de Pepino y una rama de Menta."
         ],
         "imagen": "url(imgs/dishes-icons/SantoLimento.png)",
         "headerImage": "imgs/dishes/Santo Limento.svg",
         "favorite": false
      },
      {
         "name": "Submarino",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Rubia Lager"
         ],
         "cookTime": 30,
         "recipe": [
            "En un tarro de cerveza voltear un chupito de Tequila.",
            "Llenar con cerveza Rubia Lager.",
         ],
         "imagen": "url(imgs/dishes-icons/Submarino.png)",
         "headerImage": "imgs/dishes/Submarino.svg",
         "favorite": false
      },
      {
         "name": "Surfer On Acid",
         "label": "digestivo",
         "ingredients": [
            "Malibu",
            "Jägermeister",
            "Jugo de Ananá",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera 30ml de Malibu.",
            "Agregar 30ml de Jägermeister.",
            "Agregar 30ml de Jugo de Ananá.",
            "Agitar fuerte y vertir en un vaso old fashioned con Hielo.",
            "Decorar a gusto."
         ],
         "imagen": "url(imgs/dishes-icons/SurferOnAcid.png)",
         "headerImage": "imgs/dishes/Surfer On Acid.svg",
         "favorite": false
      },
      {
         "name": "Tequila Oasis",
         "label": "refrescante",
         "ingredients": [
            "Tequila Oro",
            "Triple Sec",
            "jugo de Arándano",
            "Jugo de Naranja",
            "Limón"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 30ml de Tequila.",
            "Agregar 15ml Triple Sec.",
            "Agregar 60ml de Jugo de Arándano.",
            "Completar con 30ml de Jugo de Naranja.",
            "Agitar bien.",
            "Colar en una copa tipo Martini.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/TequilaOasis.png)",
         "headerImage": "imgs/dishes/Tequila oasis.svg",
         "favorite": false
      },
      {
         "name": "Tequila Sunrise",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Naranja",
            "Granadina",
            "Limón",
            "Guinda",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo picado.",
            "Agregar 50ml de Tequila.",
            "Agregar 100ml de Jugo de Naranja.",
            "Agitar fuertemente.",
            "Colar sobre un vaso alto y añadir cubitos de Hielo hasta llenar el vaso casi por completo.",
            "Verter rápidamente los 25ml de Granadina, para que caiga al fondo del vaso y vaya subiendo lentamente (así conseguirá un efecto de amanecer).",
            "Adornar con la rodaja de Limón, la Guinda y un sorbete."
         ],
         "imagen": "url(imgs/dishes-icons/tequilaSunrise.png)",
         "headerImage": "imgs/dishes/tequila sunrise.svg",
         "favorite": false
      },
      {
         "name": "Tequini",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Vermouth Seco",
            "Salsa Tabasco"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 50ml de Tequila.",
            "Agregar 20ml de Vermouth Seco.",
            "Completar con 2 gotas de Salsa Tabasco.",
            "Agitar energéticamente.",
            "Colar sobre una copa de estilo martini.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/Tequini.png)",
         "headerImage": "imgs/dishes/Tequini.svg",
         "favorite": false
      },
      {
         "name": "The Sweet Deer",
         "label": "refrescante",
         "ingredients": [
            "Jägermeister",
            "Gaseosa Cola",
            "Helado de Vainilla",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso hielo.",
            "Agregar 30ml Jägermeister.",
            "Completar con Gaseosa Cola.",
            "Una vez lleno colocar una cucharada grande de Helado de Vainilla",
            "Decorar a gusto."
         ],
         "imagen": "url(imgs/dishes-icons/TheSweetDeer.png)",
         "headerImage": "imgs/dishes/The Sweet Deer.svg",
         "favorite": false
      },
      {
         "name": "Tictoc Del Reloj",
         "label": "refrescante",
         "ingredients": [
            "Tequila Blanco",
            "Jugo de Limón",
            "Jarabe de Jengibre",
            "Amargo de Angostura",
            "Hielo",
            "Menta"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera 45ml Tequila.",
            "Agregar 30ml Jugo de Limón.",
            "Agregar 30ml Jarabe de Jengibre.",
            "Complegar con 8ml Amargo de Angostura.",
            "Agitar fuertemente durante unos segundos.",
            "Colar en un vaso lleno de cubos de Hielo.",
            "Decorar con unas ramita de Menta."
         ],
         "imagen": "url(imgs/dishes-icons/TictocDelReloj.png)",
         "headerImage": "imgs/dishes/TictocDelReloj.svg",
         "favorite": false
      },
      {
         "name": "Tom collins",
         "label": "refrescante",
         "ingredients": [
            "Gin",
            "Jugo de Limón",
            "Azúcar",
            "Soda",
            "Limón"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Gin.",
            "Agregar 30ml Jugo de Limón y 1 cdta. de Azúcar.",
            "Agitar vigorosamente por unos 30 segundos.",
            "Vertir la mezcla en un vaso alto con Hielo.",
            "Rellenar con Soda.",
            "Decorar con una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/tomCollins.png)",
         "headerImage": "imgs/dishes/tom collins.svg",
         "favorite": false
      },
      {
         "name": "Vendetta",
         "label": "aperitivo",
         "ingredients": [
            "Americano Gancia",
            "Champagne",
            "Licor de Cassis",
            "Frutos Rojos",
            "Naranja",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una copa Hielo.",
            "Agregar 1 parte de Americano Gancia.",
            "Agregar 1,5 partes de Champagne.",
            "Completar con 0,5 partes de Licor de Cassis.",
            "Decorar con Frutos Rojos y una piel de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/Vendetta.png)",
         "headerImage": "imgs/dishes/Vendetta.svg",
         "favorite": false
      },
      {
         "name": "Vodka con Frutilla",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Ron Blanco",
            "Licor de Frutilla",
            "Jugo de Limón",
            "Granadina",
            "Frutilla"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir dentro de una coctelera Hielo.",
            "Agregar 45ml de Vodka.",
            "Agregar 45ml de Ron Blanco.",
            "Agregar 45ml de Licor de Frutilla.",
            "Agregar 15ml de Jugo de Limón.",
            "Completar con 1/2 cdta. de Granadina.",
            "Agitar durante unos segundos.",
            "Colar y servir en la copa de cóctel.",
            "Usar una Frutilla para adornar."
         ],
         "imagen": "url(imgs/dishes-icons/VodkaConFrutilla.png)",
         "headerImage": "imgs/dishes/Vodka con frutilla.svg",
         "favorite": false
      },
      {
         "name": "Vodka con Sprite",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Gaseosa Lima Limón",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso hielos.",
            "Agregar 40% de  Vodka.",
            "Completar con Gaseosa Lima Limón y mezclar."
         ],
         "imagen": "url(imgs/dishes-icons/VodkaConSprite.png)",
         "headerImage": "imgs/dishes/Vodka con sprite.svg",
         "favorite": false
      },
      {
         "name": "Vodka jelly: Gelatina de Frutilla y Vodka",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Gelatina sabor Frutilla",
            "Agua"
         ],
         "cookTime": 30,
         "recipe": [
            "Disolver la gelatina en 225ml de agua hirviendo.",
            "Una vez que se enfríe verter 50ml De Vodka.",
            "Seguidamente agregar 225ml de agua fría.",
            "Revolver y dejar que se solidifique."
         ],
         "imagen": "url(imgs/dishes-icons/VodkaJelly.png)",
         "headerImage": "imgs/dishes/Vodka jelly.svg",
         "favorite": false
      },
      {
         "name": "Vodka y Café con Frutas",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Frutilla",
            "Naranja",
            "Café",
            "Vino Blanco",
            "Kiwi"
         ],
         "cookTime": 30,
         "recipe": [
            "En una fuenta agregar 225g de frutas (Frutillas, Naranjas, kiwis).",
            "Agregar 400ml de Vodka.",
            "Completar con 300ml de Café.",
            "Dejar reposar 2 horas en la nevera.",
            "Luego, agregar 2 botellas de Vino Blanco muy frío.",
            "Finalmente, decorar con kiwis.",
            "Servir en copas largas."
         ],
         "imagen": "url(imgs/dishes-icons/vodkaYCafe.png)",
         "headerImage": "imgs/dishes/vodka y cafe.svg",
         "favorite": false
      },
      {
         "name": "Vodka y Melón",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Ron Blanco",
            "Licor de Melón",
            "Limonada"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir dentro de una coctelera Hielo picado.",
            "Agregar 50ml Vodka.",
            "Agregar 50ml de Licor de Melón.",
            "Agitar varias veces.",
            "Colar la mezcla sobre una copa de cóctel con Hielo.",
            "Completar con la Limonada fría."
         ],
         "imagen": "url(imgs/dishes-icons/vodkaYMelon.png)",
         "headerImage": "imgs/dishes/vodka y melon.svg",
         "favorite": false
      },
      {
         "name": "Vodka, Limón y Menta",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Limón",
            "Menta",
            "Agua",
            "Azúcar Moreno",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una licuadora o coctelera Hielo.",
            "Agregar 4 limones pelados.",
            "Agregar 500ml de agua.",
            "Agregar 150g zúcar, o miel, y unas hojas de Menta.",
            "Licuar todo.",
            "Colocar la mezcla en una jarra.",
            "Agregar 1,5l de Agua y 450ml de Vodka.",
            "Mezclar bien.",
            "Servir en copas.",
            "Adornar con hojas de Menta y rodajas de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/VodkaLimonYMenta.png)",
         "headerImage": "imgs/dishes/Vodka limon y menta.svg",
         "favorite": false
      },
      {
         "name": "Vodka Maracuya",
         "label": "refrescante",
         "ingredients": [
            "Vodka",
            "Maracuyá",
            "Limón",
            "Azúcar Moreno",
            "Hielo",
            "Pulpa de Maracuyá"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera jugo de 4 maracuyás.",
            "Agregar 300ml Vodka.",
            "Agitar durante un minuto.",
            "Incorporar 150g de azúcar y jugo de 1 Limón.",
            "Agitar de nuevo la mezcla.",
            "Servir en vasos llenos de Hielo.",
            "Decorar con 1 cdta. de pulpa de maracuyá y una rodaja de Limón."
         ],
         "imagen": "url(imgs/dishes-icons/VodkaMaracuya.png)",
         "headerImage": "imgs/dishes/VodkaMaracuya.svg",
         "favorite": false
      },
      {
         "name": "Widow Maker",
         "label": "aperitivo",
         "ingredients": [
            "Jägermeister",
            "Vodka",
            "Licor de Café",
            "Granadina",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 30ml de Jägermeister.",
            "Agregar 30ml de Vodka.",
            "Agregar 30ml de Licor de Café.",
            "Completar con 3 gotas de Granadina.",
            "Agitar unos 20 segundos.",
            "Servir en un vaso."
         ],
         "imagen": "url(imgs/dishes-icons/WidowMaker.png)",
         "headerImage": "imgs/dishes/Widow maker.svg",
         "favorite": false
      },
      {
         "name": "Godmother",
         "label": "digestivo",
         "ingredients": [
            "Vodka",
            "Amaretto",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un vaso old fashion Hielo.",
            "Agregar 30ml de Vodka.",
            "Completar con 30ml de Amaretto.",
            "Mezclar todo."
         ],
         "imagen": "url(imgs/dishes-icons/Godmother.png)",
         "headerImage": "imgs/dishes/Godmother.svg",
         "favorite": false
      },
      {
         "name": "María L´Orange",
         "label": "digestivo",
         "ingredients": [
            "Tía María",
            "Triple Sec",
            "Jugo de Naranja",
            "Hielo"
         ],
         "cookTime": 15,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 30ml de Tía María.",
            "Agregar 30ml de Triple Sec.",
            "Agregar 60ml de Jugo de Naranja.",
            "Agitar durante unos segundos.",
            "Servir en una copa Martini.",
            "Decorar con una rodaja de Naranja."
         ],
         "imagen": "url(imgs/dishes-icons/MariaLOrange.png)",
         "headerImage": "imgs/dishes/MariaLOrange.svg",
         "favorite": false
      },
      {
         "name": "Chocolate Martini",
         "label": "digestivo",
         "ingredients": [
            "Vodka",
            "Crema de Cacao",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en una coctelera Hielo.",
            "Agregar 60ml de Vodka.",
            "Completar con 45ml de crema de cacao.",
            "Agitar durante unos segundos.",
            "Tomar una copa Martini y vertir un poco de salsa de chocolate en el borde interior (en forma de espiral).",
            "Finalmente, colar en contenido de la coctelera en la copa."
         ],
         "imagen": "url(imgs/dishes-icons/ChocolateMartini.png)",
         "headerImage": "imgs/dishes/ChocolateMartini.svg",
         "favorite": false
      },
      {
         "name": "French Connection",
         "label": "digestivo",
         "ingredients": [
            "Brandy",
            "Amaretto",
            "Hielo"
         ],
         "cookTime": 30,
         "recipe": [
            "Añadir en un Vaso Old fashion Hielo.",
            "Agregar 30ml de Brandy.",
            "Completar con 30ml de Amaretto."
         ],
         "imagen": "url(imgs/dishes-icons/FrenchConnection.png)",
         "headerImage": "imgs/dishes/FrenchConnection.svg",
         "favorite": false
      }
   ];
   
   let storage = window.localStorage;

   for (let i in dishes) {
      let value = storage.getItem(dishes[i].name);
      if (value) {
         dishes[i].favorite = true;
      }
   }

   return dishes;
}