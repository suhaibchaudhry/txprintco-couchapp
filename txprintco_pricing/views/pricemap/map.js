function(doc) {
  var key = [];
  key.push(doc.activeKey.product_id);
  if(doc.activeKey.runsize) {
  	key.push(doc.activeKey.runsize);
  }
  if(doc.activeKey.color) {
  	key.push(doc.activeKey.color);
  }
  if(doc.activeKey.tat) {
  	key.push(doc.activeKey.tat);
  }
  emit(key, doc.price);
}