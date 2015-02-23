function(doc) {
  if(doc.object_type === 'categorization') {
    for(i in doc.categories) {
	var options = doc.categories[i]["options"];
	for(j in options) {
                emit([doc.product_type, i, j], options[j]);
	}
    }

  }
}
