function(doc) {
	for(i in doc.runsizes) {
		for(j in doc.runsizes[i]["colors"]) {
			// var obj = {};
			for(k in doc.runsizes[i]["colors"][j]["tat"]){
				var obj = {};
				obj[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"];
				emit([doc._id, i, j], obj);
			}
			// emit([doc._id, i, j], obj);
		}
	}
}