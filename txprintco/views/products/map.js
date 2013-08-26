function(doc) {
  emit([doc.parent_cat.title, doc.subcat], {
  	'title': doc.title,
  	'base_price': doc.base_price,
  	'product_id': doc.product_id,
  	'subcat': doc.subcat
  });
}