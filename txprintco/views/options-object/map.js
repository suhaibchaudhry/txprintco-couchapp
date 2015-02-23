function(doc) {
	if(doc.object_type === 'product') {
		for(i in doc.runsizes) {
			for(j in doc.runsizes[i]["colors"]) {
				for(k in doc.runsizes[i]["colors"][j]["tat"]){
					var options = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"];
					for(l in options) {
						emit([doc.product_id, i, j, k, options[l].option_name], options[l].option_values);
					}
				}
			}
		}
	}
}