'use strict';

var page = function() {
    /**
     * @enum
     */
    var EventType = {
        BUTTON_CLICK: 'button_click',
        TIME_OVER:    'time_over'
    };

    /**
     * @param {Number} ch
     * @param {Number} fat
     * @param {Number} p
     * @constructor
     */
    function Macros(ch, fat, p) {
        this.ch  = ch;
        this.fat = fat;
        this.p   = p;
    }

    /**
     * @param {String} name
     * @param {Macros} macros
     * @constructor
     */
    function Food(name, macros) {
        this.name   = name;
        this.macros = macros;
    }

    /**
     * @enum {string}
     */
    var Unit = {
        G:  'g',
        MG: 'mg',
        OZ: 'oz',
        LB: 'lb'
    };

    /**
     * @param {Food}   food
     * @param {Number} amount
     * @param {Unit}   unit
     * @constructor
     */
    function Ingredient(food, amount, unit) {
        this.food    = food;
        this.amount  = amount;
        this.unit    = unit;
        this.editing = false;
    }

    return {
        components: {},
        EventType:  EventType,
        Macros:     Macros,
        Food:       Food,
        Ingredient: Ingredient,
        Unit: Unit
    };
}();

document.addEventListener('DOMContentLoaded', function() {
    var store      = new page.Store();
    var model      = new page.Model(store);
    var view       = new page.View();
    var controller = page.controllerFactory(model, view);
});
