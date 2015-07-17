function(doc) {
  if(doc.object_type === 'product') {
  	emit(doc.parent_cat.title.toLowerCase().replace(/[_\W]+/g, '-'), doc.parent_cat.title);
  }
}
