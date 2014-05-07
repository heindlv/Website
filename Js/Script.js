$(document).ready(function() {
    $('nav ul li a').click(function() {
        $('section').hide();

        var sectionId = $(this).attr('href');

        $(sectionId).show();

        return false;
    });
});