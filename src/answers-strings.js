define(function() { 

	var module = {
		'repeatString': function(str, num) {
			var rez = '';

			if(num == 0)
			{
				return rez;
			}	

			for(var i=0; i<num; i++)
			{
				rez += str;
			}	

			return rez;
		},
		'validatePhonenumber': function(str){
			var phoneRegex = /^[0-9]{3}[-. ]{0,1}[0-9]{3}[-. ]{0,1}[0-9]{4}[-. ]{0,1}$/;
			return	phoneRegex.test(str);
		}
	};

	return module;


 });