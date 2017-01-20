'use strict';
/* global page, sea */

page.controllerFactory = function(model, view) {
    function Controller() {
        model.update(function(e) {
            if(e.type === page.EventType.TIME_OVER)
                view.render(e.data);
        });

        view.update(function(e) {
            if(e.type === page.EventType.BUTTON_CLICK)
                model.doSomething(e.data);
        });
    }

    Controller.prototype = new sea.Controller(model, view);

    return new Controller();
};
