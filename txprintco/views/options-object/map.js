function(doc) {
	for(i in doc.runsizes) {
		for(j in doc.runsizes[i]["colors"]) {
			for(k in doc.runsizes[i]["colors"][j]["tat"]){
				var obj = {};
				obj[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"];
				emit([doc._id, i, j, k], obj);
			}
		}
	}
}