$(document).ready(function() {



    $('nav ul li a').click(function() {
        $('section').hide();
        var sectionId = $(this).attr('href');
        $(sectionId).fadeIn();
        return false;
    });

    $('#jumbotronButton').click(function() {
        $('.jumbotron').fadeOut();
    });

    $('#Logo').click(function() {
        $('.jumbotron').fadeIn();
    });




});



