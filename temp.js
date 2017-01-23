dio.event.subscribe('widgetLoaded:TripPlanner', function() {
    var glowingButtonx
        = $('<div class="dot-container widget-tooltip widget-tooltip-tl widget-tooltip-trigger widget-tooltip-breakout" title="Pick up where you left off and access your recent searches anytime, anywhere">'
        +       '<div class="cd-single-step animate-dot"></div>'
        +   '</div>');

    var glowingButton
        = $('<div class="dot-container widget-tooltip widget-tooltip-tl widget-tooltip-trigger widget-tooltip-breakout" title="Pick up where you left off and access your recent searches anytime, anywhere">'
        +       '<div class="cd-single-step animate-dot"></div>'
        +   '</div>');

    var glowingButton2
        = $('<div class="widget-tooltip widget-tooltip-tl widget-tooltip-trigger cd-single-step animate-dot widget-tooltip-breakout" title="Pick up where you left off and access your recent searches anytime, anywhere.<a>Got it</a>"></div>');

    $('.all-trip').append(glowingButton);

    var TooltipWidget = new dio.widget.Tooltip('.dot-container');

    TooltipWidget.subscribe('tooltipTriggered', function () {
        $('.cd-single-step').removeClass('animate-dot');
    });

    $('.got-it').on('click', function (ev) {
        $('.cd-single-step').css('display', 'none');
    });
});