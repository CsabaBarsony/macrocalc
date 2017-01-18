'use strict';
/* global app, sea */

app.controllerFactory = function(model, view) {
    function Controller() {
        model.on(function(event, data) {
            if(event === 'timeOver')
                view.render(data);
            else if(event === 'buttonClicked')
                model.doSomething(data);
        });
    }

    Controller.prototype = new sea.Controller(model, view);

    return new Controller();
};
