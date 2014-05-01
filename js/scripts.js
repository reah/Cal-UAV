$(document).ready(function() {
	var body = $("html, body");
	$("#about").click(function() {
		body.animate({scrollTop: $("#mid2").offset().top}, 1000); 
	});
	$("#team").click(function() {
		body.animate({scrollTop: $("#mid3").offset().top}, 1000);
	});
	$("#contact").click(function() {
		body.animate({scrollTop: $("#mid5").offset().top}, 1000);
	});
});
