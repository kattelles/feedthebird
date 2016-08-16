$(document).ready(function(){
    $(document).click(e => {
      animateDiv([e.pageY, e.pageX - 120]);
    });
});

function animateDiv(pos){
    $('.animate').animate({ top: pos[0], left: pos[1] }, 500);
}
