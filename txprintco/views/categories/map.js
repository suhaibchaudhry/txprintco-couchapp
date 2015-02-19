function(doc) {
  emit(doc.product_type_weight, doc.parent_cat.title);
}