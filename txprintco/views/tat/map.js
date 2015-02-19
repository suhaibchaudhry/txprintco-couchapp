function(doc) {
	if(doc.object_type === 'product') {
		for(i in doc.runsizes) {
			for(j in doc.runsizes[i]["colors"]) {
				// var tat = new Array();
				var tat = {};
				for(k in doc.runsizes[i]["colors"][j]["tat"]){
					// tat.push(doc.runsizes[i]["colors"][j]["tat"][k].tat_value);
					tat[k] = doc.runsizes[i]["colors"][j]["tat"][k].tat_value;
				}
				// var obj = {};
				// obj[k] = tat;
				emit([doc.product_id, i, j], tat);
				//emit([doc.product_id, i, j], doc.product_id);
			}
		}
	}
}
