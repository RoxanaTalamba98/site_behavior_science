$('.staff-name').hover(function() {
    $(this).toggleClass('hover');
});

var lastItem;

$('.staff-name').click(function(currentItem) {
    var currentItem = $(this);
    if ($(this).next().height() == 0) {
        $(lastItem).css({'font-weight':'normal'});
        $(lastItem).next().animate({height: '0px'},400,'swing');
        $(this).css({'font-weight':'bold'});
        $(this).next().animate({height: '250px',opacity: 1},400,'swing');
    } else {
        $(this).css({'font-weight':'normal'});
        $(this).next().animate({height: '0px',opacity: 1},400,'swing');
    }
    lastItem = $(this);
});