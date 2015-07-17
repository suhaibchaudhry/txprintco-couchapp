function(doc) {
  if(doc.object_type === 'product') {
	  emit([doc.parent_cat.title.toLowerCase().replace(/[_\W]+/g, '-'), doc.subcat], {
	  	'title': doc.title,
	  	'base_price': doc.base_price,
	  	'product_id': doc.product_id,
	  	'subcat': doc.subcat
	  });
  }
}
