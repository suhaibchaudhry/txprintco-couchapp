function(keys, values, rereduce) {
    /*if(rereduce) {
    	return sum(values);
    } else {
    	return values.length;
    }
    return sum(values);*/
    var amount = 0;
    var best_price = 0;
    var best_price_str = '';
    for(var i in values) {
    	var doc = values[i];

    	for(var j in doc) {
    		if(typeof doc[j] == "object") {
    			amount = Number(doc[j].base_price.replace(/[^0-9\.]+/g,""));
    			if(best_price == 0 || amount < best_price) {
    				best_price = amount;
                    best_price_str = doc[j].base_price;
    			}
    		}
    	}
    }

    return best_price_str;
}