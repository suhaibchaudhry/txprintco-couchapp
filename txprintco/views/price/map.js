function(doc) {
	for(i in doc.runsizes) {
		for(j in doc.runsizes[i]["colors"]) {
			//var price = new Array();
			// var price = {};
			for(k in doc.runsizes[i]["colors"][j]["tat"]){
				//price.push(doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"]);
				// price[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"];
				var obj = {};
				obj[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"];
				// doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"]['tat_key'];
				// emit([doc._id, i, j, k], doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"]['tat_key']);
				emit([doc.product_id, i, j, k], obj);
				//emit([doc.product_id, i, j, k], doc.product_id);
			}
			// var obj = {};
			// obj[k] = price;
			// emit([doc._id, i, j], price);
		}
	}
}
