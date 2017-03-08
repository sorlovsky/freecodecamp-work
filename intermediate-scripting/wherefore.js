function whatIsInAName(collection, source){
		var arr = [];
		for (var i=0; i<collection.length; i++){
			keys = Object.keys(source)
			//console.log(keys);
			var add = true;
			for (var j=0; j<keys.length; j++){
				if (collection[i].hasOwnProperty(keys[j])){
					//console.log(collection[i], "has prop");
					if (collection[i][keys[j]] != source[keys[j]]){
						add = false;
					} 
				} else {
					add = false;
				}
				
			}
			if (add){
				arr.push(collection[i])
			}
		}
		console.log(arr);
		return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
