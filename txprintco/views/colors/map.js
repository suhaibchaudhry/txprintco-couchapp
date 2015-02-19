function(doc) {
	for(i in doc.runsizes) {
		//var colors = new Array();
		var colors = {};
		for(j in doc.runsizes[i]["colors"]) {
			//var obj = {};
			//obj[j] = doc.runsizes[i]["colors"][j].color;
			//colors.push(obj);
			colors[j] = doc.runsizes[i]["colors"][j].color;
		}

		emit([doc.product_id, i], colors);
		//emit([doc.product_id, i], doc.product_id);
	}
}