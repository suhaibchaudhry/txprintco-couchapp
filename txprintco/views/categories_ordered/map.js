function(doc) {
  if(doc.object_type === 'product') {
  	emit([doc.product_type_weight, doc.parent_cat.title.toLowerCase().replace(/[_\W]+/g, '-')], doc.parent_cat.title);
  }
}