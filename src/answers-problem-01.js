define(function() {

	function Person(name) {
		this.fullname = name;
	}

	Person.prototype.yell = function() {
		return "I AM " + this.fullname.toUpperCase() + "!";
	};

	return function() {
		var guy = new Person('John');

		return guy.yell();
	};

});
