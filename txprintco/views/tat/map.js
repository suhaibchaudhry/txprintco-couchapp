function(doc) {
	for(i in doc.runsizes) {
		var tat = new Array();
		for(j in doc.runsizes[i]["colors"]) {

			for(k in doc.runsizes[i]["colors"][j]["tat"]){
				tat.push(doc.runsizes[i]["colors"][j]["tat"][k].tat_value);
			}
			emit([doc._id, i, j], tat);
		}
	}
}