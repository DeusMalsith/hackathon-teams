$(document).ready(function() {
  console.log('AJAX ONLINE')
  $("#edit-form").submit(function(e) {
  	e.preventDefault();

  	var teamUrl = $(this).attr("action");
  	var teamData = $(this).serialize();

  	console.log("url is", teamUrl);
  	console.log("data", teamData);

  	$.ajax({
  		method: "PUT",
  		url: teamUrl,
  		data: teamData
  	}).done(function(data) {
  		// console.log("success!", data);
  		window.location = teamUrl;
  	}).fail(function(err) {
  		console.log("error", err);
  	}); // End of AJAX
  }); // End of edit-form submit

	$("#delete-btn").click(function(e) {
		e.preventDefault();
    console.log('DELETE BUTTON')

		var teamUrl = $(this).attr("href");
		console.log("Stuff is working, url is", teamUrl);

		$.ajax({
			method: "DELETE",
			url: teamUrl
		}).done (function(data) {
			console.log("success", data);
			window.location = "/teams";
		}).fail(function(err) {
			console.log("err", err);
		});
	});
}); // End of document ready