// Plugin Refresh Gallery - Android
;(function(){
	var refreshMedia = function() {};

	refreshMedia.refresh = function(url) {
		var exec = require("cordova/exec");
		exec(success, error, "pluginRefreshGallery", "refresh", [url]);
	};

	var success = function(){
		alert("Success");
	},

	error = function(){
		alert("Error");
	};

})();
