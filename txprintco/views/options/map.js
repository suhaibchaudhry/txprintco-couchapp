function(doc) {
	if(doc.object_type === 'product') {
		// emit(doc._id, doc);
		// getOptionNames([doc._id],doc);
		for(i in doc.runsizes) {
			for(j in doc.runsizes[i]["colors"]) {
				// emit([doc._id, i, j], doc.runsizes[i]["colors"][j]);
				for(k in doc.runsizes[i]["colors"][j]["tat"]){
					// var optionNames = {};
					// var i = 0;
					// optionNames[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"];
					var obj = {};
					var index = 0;
					// obj[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"];
					// emit([doc._id, i, j, k], obj);
					// getOptionNames([doc._id, i, j, k] ,doc.runsizes[i]["colors"][j]["tat"][k]);
					for(l in doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"])
					{
						// emit([doc._id, i, j, k, l], doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"]); //Prints out the whole options object
						// obj[index] = l;
						// index++;
						var options = getOptionNamesFlat(doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"]);
						emit([doc.product_id, i, j, k], options);
					}
					//emit([doc.product_id, i, j, k], doc.product_id);
				}
			}
		}
	}
}

function getOptionNamesFlat(optObj) {
	var options = new Array();
	for(var option_name in optObj) {
		options.push(option_name);
	}

	return options;
}

// Get the rest of the option names.
function getOptionNames(optObj, optionList)
{
	// var myObj = {};
	if(optObj) {
		for(var key in optObj) {
			optionList.push(key);
			break;
		}

		for(var option in optObj[key]) {
			getOptionNames(optObj[key][option]["options"], optionList);
			return;
		}
	} else {
		return;
	}
}