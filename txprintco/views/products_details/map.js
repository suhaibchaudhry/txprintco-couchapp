function(doc) {
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
			'title': doc.title,
			'url': doc.url,
			'base_price': doc.base_price,
			'runsizes': runsizes,
			'product_id': doc.product_id
			//'asad' : 'test'
		}
	); 
}