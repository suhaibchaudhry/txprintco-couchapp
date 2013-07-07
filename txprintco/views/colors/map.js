function(doc) {
	for(i in doc.runsizes) {
		var colors = new Array();
		for(j in doc.runsizes[i]["colors"]) {
			var obj = {};
			obj[j] = doc.runsizes[i]["colors"][j].color;
			colors.push(obj);
		}

		emit([doc._id, i], colors);
	}
}