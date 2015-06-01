function(doc) {
	if(doc.object_type === 'product') {
		for(i in doc.runsizes) {
			for(j in doc.runsizes[i]["colors"]) {
				// var obj = {};
				for(k in doc.runsizes[i]["colors"][j]["tat"]){
					var obj = {};
					obj[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"];
					obj[k].base_price = obj[k].base_price.replace(/[^0-9\.]+/g,"");
					emit([doc.product_id, i, j], obj);
				}
				// emit([doc._id, i, j], obj);
			}
		}
	}
}
