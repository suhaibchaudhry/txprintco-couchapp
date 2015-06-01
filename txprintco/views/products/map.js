function(doc) {
  if(doc.object_type === 'product') {
	  emit([doc.parent_cat.title, doc.subcat], {
	  	'title': doc.title,
	  	'base_price': doc.base_price.replace(/[^0-9\.]+/g,""),
	  	'product_id': doc.product_id,
	  	'subcat': doc.subcat
	  });
  }
}