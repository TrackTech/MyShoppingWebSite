/**
 * Fetches products module
 */

var application = application | {};

application = {
		commonMethod: {
				fetchProducts:function(){
						alert('I am fetching products');					
					Server.Interaction.fetchData('asdf','asdf');
					}		
		}
};

$(document).ready(function(){	
	application.commonMethod.fetchProducts();
});