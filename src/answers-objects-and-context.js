define(function() { 

	var module = {
		'alterContext': function(myFunc, myObj) {
			return myFunc.call(myObj);
		}
	};

	return module;



});