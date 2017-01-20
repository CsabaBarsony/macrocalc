'use strict';
/* global page, sea */

page.Model = function() {
    function Model(store) {
        this.store = store;
    }

    Model.prototype = new sea.Model();

    Model.prototype.doSomething = function(data) {
        setTimeout(() => {
            this.notify(new sea.Event(page.EventType.TIME_OVER, 'model ' + data));
        }, 100);
    };

    return Model;
}();
