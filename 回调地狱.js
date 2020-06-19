chooseToppings(function(toppings) {
    placeOrder(toppings, function(order) {
      collectOrder(order, function(pizza) {
        eatPizza(pizza);
      }, failureCallback);
    }, failureCallback);
  }, failureCallback);