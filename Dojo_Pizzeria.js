function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.CrustType = crustType;
    pizza.SauceType = sauceType;
    pizza.Cheese = cheese;
    pizza.Toppings = toppings;
    return pizza;
}
var Pizza1 = pizzaOven("Deep Dish", "Traditional", "Mozzarella", ["Pepperoni", "Sausage"])

var Pizza2 = pizzaOven("Hand-Tossed", "Marinara", ["Mozzarella", "Feta"], ["Mushrooms", "Olives", "Onions"])

var Pizza3 = pizzaOven("Hand-Tossed", "Traditional", "Mozzarella", ["Pepperoni", "Sausage", "Mushrooms", "Onions", "Jalepenos"])

var Pizza4 = pizzaOven("Hand-Tossed", "Traditional", "Mozzarella", ["Ham", "Pineapple", "Bacon"])

function randomPizza(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var ranInt = Math.floor(Math.random() * (max - min) + min);
    return ranInt
}
var PizzaRandom = randomPizza(1,5);

if (PizzaRandom == 1) {
    console.log("The Deep Dish Pizza")
    console.log(Pizza1);
}

if (PizzaRandom == 2) {
    console.log("The Vegitarian Pizza")
    console.log(Pizza2);
}

if (PizzaRandom == 3) {
    console.log("The Supreme Pizza")
    console.log(Pizza3);
}

if (PizzaRandom == 4) {
    console.log("The Hawaiian Pizza")
    console.log(Pizza4);
}



