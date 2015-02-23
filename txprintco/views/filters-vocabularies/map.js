function(doc) {
  if(doc.object_type === 'categorization') {
  	var categories = new Array();

    for(var i in doc.categories) {
		var terms = new Array();
		var options = doc.categories[i]["options"];
		for(var j in options) {
			terms.push(j);
		}		

		var vocabulary = {
			'vocabulary_en_name': doc.categories[i],
			'vocabulary_machine_name': i,
			'terms': terms
		};

		categores.push(vocabulary);
    }

    emit(doc.product_type, categories);
  }
}