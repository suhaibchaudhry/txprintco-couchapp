function(doc) {
  if(doc.object_type === 'product') {
  	emit(generate_object_uri(generate_object_uri(doc.parent_cat.title)), doc.parent_cat.title);
  }
}

function generate_object_uri(identifier) {
	return identifier.toLowerCase().replace(/[_\W]+/g, '-');
}