'use strict';
/* global app, sea */

app.controllerFactory = function(model, view) {
    function Controller() {
        model.update(function(e) {
            if(e.type === app.EventType.TIME_OVER)
                view.render(e.data);
        });

        view.update(function(e) {
            if(e.type === app.EventType.BUTTON_CLICK)
                model.doSomething(e.data);
        });
    }

    Controller.prototype = new sea.Controller(model, view);

    return new Controller();
};
