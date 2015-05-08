var userReposUrl = "https://api.github.com/users/damianfanaro/repos";

$(document).ready(function() {

	$.getJSON(userReposUrl, function(data) {

		alert("sad");

	});
})