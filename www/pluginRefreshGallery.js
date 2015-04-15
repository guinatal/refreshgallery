// Plugin Refresh Gallery - Android
var refreshMedia = function() {};

refreshMedia.refresh = function(url) {
	alert("chegou");
	var exec = require("cordova/exec");
	exec(success, error, "PluginRefreshGallery", "refresh", [url]);
};

var success = function(){
	alert("Success");
},

error = function(){
	alert("Error");
};
