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
    var best_price_str_tmp = '';
    for(var i in values) {
    	var doc = values[i];

    	for(var j in doc) {
    		if(typeof doc[j] == "object") {
                best_price_str_tmp = doc[j].base_price.replace(/[^0-9\.]+/g,"");
    			amount = Number(best_price_str_tmp);
    			if(best_price == 0 || amount < best_price) {
    				best_price = amount;
                    best_price_str = best_price_str_tmp;
    			}
    		}
    	}
    }

    return best_price_str;
}