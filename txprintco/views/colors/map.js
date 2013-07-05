function(doc) {
	for(i in doc.runsizes) {
		var colors = new Array();
		for(j in doc.runsizes[i]["colors"]) {
			colors.push(doc.runsizes[i]["colors"][j].color);
		}

		emit([doc._id, i], colors);
	}
}