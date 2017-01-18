'use strict';
/* global app, sea */

app.Model = function() {
    function Model() {

    }

    Model.prototype = new sea.Model();

    Model.prototype.doSomething = (data) => {
        setTimeout(() => {
            this.trigger('timeOver', 'majom from model' + data);
        }, 100);
    };

    return Model;
}();
