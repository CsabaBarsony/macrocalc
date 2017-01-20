'use strict';
/* global page.components */

(function(components) {
    /**
     * @param {String} id
     * @param {Object} params
     * @constructor
     */
    function Show(id, params) {
        this.id = id;
        this.params = params;
    }

    /**
     * @param ingredients
     */
    Show.prototype.update = function(ingredients) {
        console.log('Show update', ingredients, this.params);
    };

    components.Show = Show;
}(page.components));
