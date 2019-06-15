$(function () {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});


	var today = new Date();
	var hourNow = today.getHours();
	var greeting = "Bem-vindo";
	var bio = window.document.getElementById("welcome").textContent;

	if (hourNow > 18) {
		greeting = 'Boa noite';
	} else if (hourNow > 12) {
		if (hourNow > 12) {
			greeting = 'Boa tarde';
		} else if (hourNow > 0) {
			greeting = 'Bom dia';
		} else {
			greeting = 'Bem-vindo';
		}

	}

	window.document.getElementById("welcome").innerHTML = greeting + ", sou a Sofia!<br/>"+bio;




});

"use strict";
jQuery(document).ready(function ($) {

    jQuery('.teamskillbar').each(function () {
        jQuery(this).find('.teamskillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 6000);
    });
});


