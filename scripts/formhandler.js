(function(window){
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function FormHandler(selector){
        if (!selector){
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if(this.$formElement.length == 0){
            throw new Error('Couldn\'t find selector: ' + selector);
        }
    }
    FormHandler.prototype.addSubmitHandler = function(fn){
        console.log('Setting submit handler');
        this.$formElement.on('submit', function(event){
            event.preventDefault();
        
            var data = {};
            $(this).serializeArray().forEach(function (item){
                data[item.name] = item.value;
                console.log(item.name + " is "+ item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };
    FormHandler.prototype.addPaymentHandler = function(){
        console.log("Setting submit handler for pay");
        this.$formElement.on('submit', function(event){
            event.preventDefault();
            $(this).serializeArray().forEach(function(item){
                console.log(item.name +" is " + item.value);
            });
            var $div = $('<div></div>', {"id": "modal"});
            var $p = $('<p></p>')
            var title = $.trim($('input[name="title"]:checked').parent().text());
            var name = $('#name').val();
            var text = "Thank you for your payment, " + title +" " + name+"!";
            $p.append(text);
            $div.append($p);

           $div.css({"background-color":"whitesmoke", "position": "absolute", "border":"1px solid black", "padding":"10px 10px", "text-align":"center", "top":"50%", "left":"50%", "width":"400px", "height":"100px", "margin":"-50px 0 0 -200px"});
           $div.modal();
        });
    };
    App.FormHandler = FormHandler;
    window.App = App;
})(window);