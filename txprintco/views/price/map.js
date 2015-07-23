function(doc) {
	if(doc.object_type === 'product') {
		for(i in doc.runsizes) {
			for(j in doc.runsizes[i]["colors"]) {
				for(k in doc.runsizes[i]["colors"][j]["tat"]){
					emit([doc.product_id, i, j, k], doc.runsizes[i]["colors"][j]["tat"][k]["price"]["regular"]);
				}
			}
		}
	}
}
