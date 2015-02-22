function(doc) {
  if(doc.object_type === 'categorization') {
    emit(doc.product_type, doc);
  }
}
