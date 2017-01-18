'use strict';
/* global app, sea */

app.Model = function() {
    function Model() {

    }

    Model.prototype = new sea.Model();

    Model.prototype.doSomething = function(data) {
        setTimeout(() => {
            this.trigger(new sea.Event(app.EventType.TIME_OVER, 'model ' + data));
        }, 100);
    };

    return Model;
}();
