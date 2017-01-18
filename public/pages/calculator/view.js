'use strict';
/* global app, sea, Handlebars */

app.View = function() {
    var buttonTemplate
    =   '<div>'
    +       '<button class="my_button">Click me!</button>'
    +   '</div>';

    function View() {
        function init(c) {
            var container = document.getElementById('button_container');
            container.innerHTML = buttonTemplate;
            container.querySelector('.my_button').addEventListener('click', function() {
                c.trigger(new sea.Event(app.EventType.BUTTON_CLICK, 'view'));
            });
        }

        init(this);
    }

    View.prototype = new sea.View();

    View.prototype.render = function(params) {
        var container = document.getElementById('button_container');
        var label = document.createElement('div');
        label.innerHTML = '<span>' + params + '</span>';
        container.appendChild(label);
    };

    return View;
}();
