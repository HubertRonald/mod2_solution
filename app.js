(function () {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var itemsToBuy = this;
        itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();

        itemsToBuy.checkOff = function (itemIndex) {
            ShoppingListCheckOffService.checkOffService(itemIndex);
        };
        itemsToBuy.message = function () {
            return (itemsToBuy.items == "");
        };
    }


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var itemsBought = this;
        itemsBought.items = ShoppingListCheckOffService.getItemsBought();
        itemsBought.message = function (){
            return (itemsBought.items=="");
        };
    
    }

    function ShoppingListCheckOffService() { 
        var service = this;
        var itemsBought = [];

        // List of shopping items
        var itemsToBuy = [
            {name:"Cookie",
            quantity:10
            },
            {name : "Coca cola",
            quantity : 5
            },
            {name : "Orange",
            quantity : 7
            },
            {name : "Chocolate",
            quantity : 20
            },
            {name : "Twinkie",
            quantity : 10
            }
        ];

        service.checkOffService = function (itemIndex) {
            itemsBought.push(itemsToBuy[itemIndex]);
            itemsToBuy.splice(itemIndex, 1);
        };

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };

        service.getItemsBought = function () {
            return itemsBought;
        };

    }
})();