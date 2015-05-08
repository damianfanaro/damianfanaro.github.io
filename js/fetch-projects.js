var userReposUrl = "https://api.github.com/users/damianfanaro/repos";

$(document).ready(function() {

	$.getJSON(userReposUrl, function(data) {

		for (var i = 0; i < data.length; i++) {
			var item = "<a href=\"" + 
						data[i].html_url + 
						"\" class=\"list-group-item\" target=\"_blank\"><h5 class=\"list-group-item-heading\">" + 
						data[i].name + 
						"</h5></a>";
			$("#projects-list").append(item);
		}

	});
})