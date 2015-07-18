function(doc) {
//	var obj = {};
//	obj[doc.subcat] = {'title': doc.title, 'base_price': doc.base_price, 'product_id': doc._id}
//  emit(doc.parent_cat.title, {doc.subcat:
//  	'title': doc.title,
//  	'base_price': doc.base_price,
//  	'product_id': doc._id
//  });
	if(doc.object_type === 'product') {
		emit([doc.parent_cat.title.toLowerCase().replace(/[_\W]+/g, '-'), doc.subcat], {'product_id': doc.product_id});
	}
}