define(["jquery"], function($) { 

	var module = {
		'handleClickOnSpan': function(domEl, handler) {
			$(domEl).on('click', 'span', function(event){
				handler.call(this, event);

			});
		},
		'getTheNames': function(url){
			var defer = $.Deferred();
			$.ajax({ 'url': url, 
					 'dataType': 'json',
					 'success': function(data) {

					 	var rez = [];
					 	for(var i=0; i< data.people.length; i++)
					 	{
					 		rez.push(data.people[i].name);
					 	}	

					 		rez.sort();
					 		defer.resolve(rez);
					 	}
					});
			return defer.promise();
		}
	};

	return module;




 });