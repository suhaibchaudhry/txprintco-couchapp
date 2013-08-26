function(doc) {
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
					obj.options = new Array();
					getOptionNames(doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"], obj.options);
					// index++;
					// emit([doc._id, i, j, k], optionNames);
				}
				emit([doc.product_id, i, j, k], obj);
				emit([doc.product_id, i, j, k], doc.product_id);
				
			}
		}
	}
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
	//var index = 0;

	/*for(var i in optObj)
	{
		myObj.push(l);
		for(var j in optObj[i])
		{
			myObj.push(j);
			return myObj;
			getOptionNames(optObj[i][j]);
			// for(var k in optObj[i][j])
			// {
			// 	if(optObj[i][j]["options"])
			// 	{
			// 		myObj.push(optObj[i][j]["options"]);	
			// 	}
				
			// }
			
		}

	}*/
	// return myObj;
	// var myObj = {};
	// // We have the first option object right now in "optObj"
	// for(i in optObj)
	// {
	// 	emit(key, optObj[i]);
	// }

	// return myObj;
}
/*
function countNumberofItems(objToCount)
{
	var count = 0;
	for(var o in objToCount)
	{
		if(objToCount.hasOwnProperty(o))
		{
			++count;
		}
	}

	return count;
}
*/

// function(doc) {
// 	// emit(doc._id, doc);
// 	for(i in doc.runsizes) {
// 		for(j in doc.runsizes[i]["colors"]) {
// 			for(k in doc.runsizes[i]["colors"][j]["tat"]){
// 				var optionNames = {};
// 				var i = 0;
// 				optionNames[k] = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"];
// 				emit([doc._id, i, j, k], optionNames);
// 				if(doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"])
// 				{
// 					for(l in doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"])
// 					{
// 						optionNames[i] = l; // Get the first option name.
// 						var options = doc.runsizes[i]["colors"][j]["tat"][k]["price"]["options"][l];
// 						// getOptionNames(optObj);
// 					}
// 					emit([doc._id, i, j, k], optionNames);
// 				}
// 				else
// 				{
// 					emit([doc._id, i, j, k], optionNames);
// 				}
// 			}
// 		}
// 	}
// }