define(function() { 


var module = {
		'arrayDupes': function(arr) {
			var rez = [], i, len = arr.length, obj= {};
			
			for(i=0; i<len; i++)
			{
				if(obj[arr[i]] === 0)
				{
					rez.push(arr[i]);
					obj[arr[i]]++;
				}
				else
				{
					obj[arr[i]] = 0;					
				}	
			}

			return rez;
		},
		'arrayPrepend': function(arr, newVal){
			arr.unshift(newVal);
		},
		'arrayPrependAll': function(arr){
			var i;
			for(i=arguments.length -1; i> 0;  i--)
			{
				arr.unshift(arguments[i]);
			}
		}
	};

	return module;


 });