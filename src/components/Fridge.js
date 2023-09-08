export function getIngredients(locale) {
    
    let esIngredients = [
        {
            id: 1,
            name: "Lacteos",
            image: "url(images/fridge/Lacteos.png)",
            ingredients: ["Manteca", "Leche", "Crema", "Queso"]
        },
        {
            id: 2,
            name: "Vegetales",
            image: "url(images/fridge/Lacteos.png)",
            ingredients: ["Lechuga", "Cebolla", "Berenjena"]
        }
    ];

    let enIngredients = [
        {
            id: 1,
            name: "Dairy",
            image: "url(images/fridge/Lacteos.png)",
            ingredients: ["Butter", "Milk", "Cream", "Cheese"]
        },
        {
            id: 2,
            name: "Vegetables",
            image: "url(images/fridge/Lacteos.png)",
            ingredients: ["Lettuce", "Onion", "Eggplant"]
        }
    ];

    if (locale === "en")
        return enIngredients;
    if (locale === "es")
        return esIngredients;
}