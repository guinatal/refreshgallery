;(function(){
	var exec = require("cordova/exec");

	// Plugin Refresh Gallery - Android
	var RefreshMedia = function() {
	};

	RefreshMedia.prototype.refresh = function(url) {
		alert(url);
		exec(success, error, "PluginRefreshGallery", "refresh", [url]);
	};

	var success = function(success){
		alert("Success");
		alert(success);
	},

	error = function(error){
		alert("Error");
		alert(error);
	};

	window.refreshMedia = new RefreshMedia();
})();
