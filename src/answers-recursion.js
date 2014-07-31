define(function() {

	var dirFound = false;

	function findFiles(fileObj, filterStr,  rez){
		if(fileObj.files)
		{

			if(!filterStr)
			{
				dirFound = true;
			}
			else if(fileObj.dir === filterStr){
				dirFound = true;
			}

			if(dirFound)
			{
				var fileArr = fileObj.files;
				for(var i=0; i<fileArr.length; i++)
				{
					if(typeof fileArr[i] === 'object')
					{
						 findFiles(fileArr[i], filterStr, rez)
					}
					else
					{
						rez.push(fileArr[i]);
					}	
				}	

			}
		}
		else {
			return;				
		}
	}


	var module = {

		'listFiles': function(fileObj, filterStr) {
			var rez = [];
			findFiles(fileObj, filterStr, rez);
			return rez;
		}
	};

	return module;




 });