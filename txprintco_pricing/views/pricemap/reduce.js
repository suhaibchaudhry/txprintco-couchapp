function(keys, values, rereduce) {
    var amount = 0;
    var best_price = '';
    for(var i in values) {
      var value = Number(values[i]);
      if(value > amount) {
        amount = value;
        best_price = values[i];
      }
    }

    return best_price;
}
