'use strict';

var sea = function() {
    function Observable() {
        this.callback = null;

        this.update = (callback) => {
            this.callback = callback;
        };

        this.notify = (e) => {
            if(!this.callback) throw new Error('No callback is set for Observable.');
            this.callback(e);
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

    /**
     * @param {String} type
     * @param {*} data
     * @constructor
     */
    function Event(type, data) {
        this.type = type;
        this.data = data;
    }

    return {
        Model: Model,
        View: View,
        Controller: Controller,
        Event: Event
    }
}();
