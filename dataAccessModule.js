var dataAccessModule = {
	getPost: function(postId){
		var rp  = require('request-promise');
    var info = {
        uri: postId,
        json: true // Automatically parses the JSON string in the response
    };
    rp(info)
        .then(res => {            //with => shorthand
            console.log(res);
        })
        .catch(function (err) {
            // API call failed...
        });
	}
}
module.exports = dataAccessModule;
