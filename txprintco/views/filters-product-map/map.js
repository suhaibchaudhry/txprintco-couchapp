function(doc) {
  if(doc.object_type === 'categorization') {
    for(i in doc.categories) {
	var options = doc.categories[i]["options"];
	for(j in options) {
                emit([doc.product_type, doc.categories[i].vocabulary_machine_name
, options[j].term_name], options[j].products);
	}
    }

  }
}