$(document).ready(function(){
    $('.burger-toggle-button').click(function(){
        $('.navigation-bar-navbar').toggleClass('active');
        $('.burger-toggle-button').toggleClass('toggle');
    });
});