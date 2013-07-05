function(doc) {
  emit(doc.parent_cat.title, {
  	'title': doc.title,
  	'base_price': doc.base_price,
  	'product_id': doc._id
  });
}