var $ = jQuery.noConflict();

$(document).ready(function () {
    $.get(ImageProxy_AjaxOut2__vars.ajax_url_action, function (result) {
        console.log(result);
    });
});
