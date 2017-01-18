'use strict';

var app = function() {
    /**
     * @enum
     */
    var EventType = {
        BUTTON_CLICK: 'button_click',
        TIME_OVER: 'time_over'
    };

    return {
        EventType: EventType
    };
}();

document.addEventListener('DOMContentLoaded', function() {
    var model = new app.Model();
    var view = new app.View();
    var controller = app.controllerFactory(model, view);
});
