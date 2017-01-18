'use strict';

var sea = {
    /**
     * @constructor
     */
    Model: function() {

    },
    /**
     * @constructor
     */
    View: function() {

    },
    /**
     * @param {Model} model
     * @param {View} view
     * @constructor
     */
    Controller: function(model, view) {
        this.model = model;
        this.view  = view;
    }
};
