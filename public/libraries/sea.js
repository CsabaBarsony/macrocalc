'use strict';

var sea = function() {
    function Observable() {
        this.callback = null;
        this.on = (callback) => {
            this.callback = callback;
        };

        this.trigger = (event, data) => {
            this.callback(event, data);
        }
    }

    /**
     * @constructor
     */
    function Model() {

    }

    Model.prototype = new Observable();

    /**
     * @constructor
     */
    function View() {
        this.components = {};
        var componentContainers = document.querySelectorAll('[data-sea-component]');
        componentContainers.forEach(c => {
            var params = {};
            [].forEach.call(c.attributes, function(attr) {
                if (/^data-sea-param-/.test(attr.name)) {
                    var camelCaseName = attr.name.substr(15).replace(/-(.)/g, function ($0, $1) {
                        return $1.toUpperCase();
                    });
                    params[camelCaseName] = attr.value;
                }
            });
            var name = c.dataset.seaComponent;
            var id = c.dataset.seaId;
            if(this.components[id]) throw new Error('Component with id ' + id + ' already existx');
            this.components[id] = new app[name](id, params);
        });
    }

    View.prototype = new Observable();

    /**
     * @param {Model} model
     * @param {View} view
     * @constructor
     */
    function Controller(model, view) {
        this.model = model;
        this.view  = view;
    }

    return {
        Model: Model,
        View: View,
        Controller: Controller
    }
}();
