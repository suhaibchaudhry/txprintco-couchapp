function(doc) {
  if(doc.object_type === 'categorization') {
    var categoriesArray = [];

    for(i in doc.categories) {
		var terms = new Array();
		var options = doc.categories[i]["options"];
		for(j in options) {
			terms.push(j);
		}

		categoriesArray.push({
				'vocabulary_en_name': doc.categories[i]["vocabulary_en"],
				'vocabulary_machine_name': i,
				'terms': terms
		});
    }

    emit(doc.product_type, categoriesArray);
  }
}