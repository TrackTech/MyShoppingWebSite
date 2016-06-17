/**
 * 
 */
var Server = Server || {};
//http://localhost:8081/MyWebService/MyList/list
Server.Interaction = {
		fetchData: function(resource,data){			
			$.ajax({
					url:"http://localhost:8081/MyWebService/MyList/list",
					method:"GET"
					
			}).done(function()
							{alert('successful ajax call');
					});
		}
}
