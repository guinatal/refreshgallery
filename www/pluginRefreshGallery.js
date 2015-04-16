;(function(){
	var exec = require("cordova/exec");

	// Plugin Refresh Gallery - Android
	var RefreshMedia = function() {
	};

	RefreshMedia.prototype.refresh = function(url) {
		alert("chegou");
		exec(success, error, "PluginRefreshGallery", "refresh", [url]);
	};

	var success = function(){
		alert("Success");
	},

	error = function(){
		alert("Error");
	};

	window.refreshMedia = new RefreshMedia();
})();
