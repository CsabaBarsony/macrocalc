'use strict';
/* global page */

page.Store = function() {
    /**
     * @constructor
     */
    function Store() {}

    /**
     * @param {Function(Food[])} callback
     */
    Store.prototype.getAllFoods = function(callback) {
        setTimeout(function() {
            callback(foods);
        }, 300);
    };

    /**
     * @param {String} text
     * @param {Function(Food[])} callback
     */
    Store.prototype.queryFoods = function(text, callback) {
        var results = [];
        foods.forEach(f => {
            if(new RegExp('^' + text, 'gi').test(f.name)) results.push(f);
        });
        setTimeout(function() {
            callback(results);
        }, 300);
    };

    /**
     * @param {String} name
     * @param {Function(Food|null)} callback
     */
    Store.prototype.getFood = function(name, callback) {
        var result = null;
        foods.forEach(f => {
            if(f.name === name) result = f;
        });
        setTimeout(function() {
            callback(result);
        }, 300);
    };

    var foodNames = [
        "asparagus",
        "apples",
        "avocado",
        "alfalfa",
        "almond",
        "arugala",
        "artichoke",
        "applesauce",
        "antelope",
        "albacore tuna",
        "Apple juice",
        "Avocado roll",
        "Bruscetta",
        "bacon",
        "black beans",
        "bagels",
        "baked beans",
        "BBQ",
        "bison",
        "barley",
        "beer",
        "bisque",
        "bluefish",
        "bread",
        "broccoli",
        "buritto",
        "babaganoosh",
        "Cabbage",
        "cake",
        "carrots",
        "carne asada",
        "celery",
        "cheese",
        "chicken",
        "catfish",
        "chips",
        "chocolate",
        "chowder",
        "clams",
        "coffee",
        "cookies",
        "corn",
        "cupcakes",
        "crab",
        "curry",
        "cereal",
        "chimichanga",
        "dates",
        "dips",
        "duck",
        "dumplings",
        "donuts",
        "eggs",
        "enchilada",
        "eggrolls",
        "English muffins",
        "edimame",
        "eel sushi",
        "fajita",
        "falafel",
        "franks",
        "fondu",
        "French toast",
        "French dip",
        "Garlic",
        "ginger",
        "gnocchi",
        "goose",
        "granola",
        "grapes",
        "green beans",
        "Guancamole",
        "gumbo",
        "grits",
        "Graham crackers",
        "ham",
        "halibut",
        "honey",
        "huenos rancheros",
        "hash browns",
        "hot dogs",
        "haiku roll",
        "hummus",
        "ice cream",
        "Irish stew",
        "Indian food",
        "Italian bread",
        "jambalaya",
        "jelly / jam",
        "jerky",
        "jalape�o",
        "kale",
        "kabobs",
        "ketchup",
        "kiwi",
        "kidney beans",
        "kingfish",
        "lobster",
        "Lamb",
        "Linguine",
        "Lasagna",
        "Meatballs",
        "Moose",
        "Milk",
        "Milkshake",
        "Noodles",
        "Ostrich",
        "Pizza",
        "Pepperoni",
        "Porter",
        "Pancakes",
        "Quesadilla",
        "Quiche",
        "Reuben",
        "Spinach",
        "Spaghetti",
        "Tater tots",
        "Toast",
        "Venison",
        "Waffles",
        "Wine",
        "Walnuts",
        "Yogurt",
        "Ziti",
        "Zucchini"
    ];

    var macrosList = [
        new page.Macros(10, 20, 30),
        new page.Macros(33, 22, 11),
        new page.Macros(50, 10, 10)
    ];

    var macrosCounter = 0;

    var foods = foodNames.map(n => {
        var food = new page.Food(n, macrosList[macrosCounter++]);
        if(macrosCounter === 3) macrosCounter = 0;
        return food;
    });

    return Store;
}();
