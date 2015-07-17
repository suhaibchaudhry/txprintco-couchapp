function(doc) {
  if(doc.object_type === 'categorization') {
    var categoriesArray = [];

    for(i in doc.categories) {
		var terms = new Array();
		var options = doc.categories[i]["options"];
		for(j in options) {
			terms.push(options[j].term_name);
		}

		categoriesArray.push({
				'vocabulary_en_name': doc.categories[i]["vocabulary_en_name"],
				'vocabulary_machine_name': doc.categories[i]["vocabulary_machine_name"],
				'terms': terms
		});
    }

    emit(doc.product_type.toLowerCase().replace(/[_\W]+/g, '-'), categoriesArray);
  }
}