function ibg(){$.each($(".ibg"),function(i,t){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}$(document).ready(function(){$(".header__menu").click(function(){$("body").toggleClass("active"),$(".header__menu").toggleClass("active"),$(".header__list").toggleClass("active")})}),ibg();var padding=function(){var i=$(".expand-must").outerHeight()+63-96;$(".expand").css({"padding-top":i,"padding-left":"20px","padding-bottom":"36px","padding-right":"20px"})};setInterval(padding,.2);