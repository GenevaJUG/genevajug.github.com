$(document).ready(function () {
    $("#details").hide();

    $("a.load").click(function() {
        $("#details").hide();
        if ($("#details").attr('memo_url') == this.href) {
            $("#details").attr('memo_url', '');
        } else {
            $("#details").attr('memo_url', this.href);
            $.get(this.href, function (c) {
                $("#details").html(c).fadeIn();
                pageTracker._trackPageview(this.href);
                $("#details")[0].scrollIntoView();  
            });
        }

        return false;
    });
});

$(window).load(function() {
    $('#superimage').cycle({
        fx:    'fade',
        pause:	60,
        timeout: 20000,
        speed:  10
     });
     touchScroll('container');
});

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}

function touchScroll(id){
    if(isTouchDevice){
        var el=document.getElementById(id);
        var scrollStartPos=0;

        document.getElementById(id).addEventListener("touchstart", function(event) {
            scrollStartPos=this.scrollTop+event.touches[0].pageY;
        },false);

        document.getElementById(id).addEventListener("touchmove", function(event) {
            this.scrollTop=scrollStartPos-event.touches[0].pageY;
            event.preventDefault();
        },false);
    }
}



