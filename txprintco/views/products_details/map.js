function(doc) {
	if(doc.object_type === 'product') {
		var runsizes = new Array();
		//var i = 0;
		//while(i < doc.runsizes.length) {
		//	runsizes[i] = ;
			//i++;
		//}

		for(i in doc.runsizes) {
			runsizes.push(i);
		}

		emit(doc.product_id, {
				'doc_id': doc._id,
				'doc_rev': doc._rev,
				'parent_cat': doc.parent_cat,
				'subcat': doc.subcat,
				'title': doc.title,
				'url': doc.url,
				'base_price': doc.base_price.replace(/[^0-9\.]+/g,""),
				'runsizes': runsizes,
				'product_id': doc.product_id
				//'asad' : 'test'
			}
		); 
	}
}