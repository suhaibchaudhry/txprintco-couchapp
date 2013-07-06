function(doc) {
	for(i in doc.runsizes) {
		for(j in doc.runsizes[i]["colors"]) {
			var price = new Array();
			for(k in doc.runsizes[i]["colors"][j]["tat"]){
				price.push(doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"]);
			}
			var obj = {};
			obj[k] = price;
			emit([doc._id, i, j], obj);
		}
	}
}