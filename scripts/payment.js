(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment-form="form"]';
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addPaymentHandler();
})(window);