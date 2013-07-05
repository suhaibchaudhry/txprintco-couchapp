function(doc) {
	for(i in doc.runsizes) {
		for(j in doc.runsizes[i]["colors"]) {
			var tat = new Array();
			for(k in doc.runsizes[i]["colors"][j]["tat"]){
				tat.push(doc.runsizes[i]["colors"][j]["tat"][k].tat_value);
			}
			var obj = {};
			obj[k] = tat;
			emit([doc._id, i, j], obj);
		}
	}
}


// function(doc) {
// 	for(i in doc.runsizes) {
// 		for(j in doc.runsizes[i]["colors"]) {
// 			var tat = new Array();
// 			for (k in doc.runsizes[i]["colors"][j]["tat"]) {
// 				tat.push(doc.runsizes[i]["colors"][j]["tat"][k].tat_value);
// 			}
// 			emit([doc._id, i, j], colors);
// 		}
// 	}
// }



// function(doc) {
// 	for(i in doc.runsizes) {
// 		var colors = new Array();
// 		for(j in doc.runsizes[i]["colors"]) {
// 			colors.push(doc.runsizes[i]["colors"][j].color);
// 		}

// 		emit([doc._id, i], colors);
// 	}
// }