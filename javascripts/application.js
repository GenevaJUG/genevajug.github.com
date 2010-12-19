$(document).ready(function () {
    $("a.load").click(function() {
        $("#details").hide();
        if ($("#details").attr('memo_url') == this.href) {
            $("#details").attr('memo_url', '');
        } else {
            $("#details").attr('memo_url', this.href);
            $.get(this.href,
                    function (c) {
                        $("#details")
                                .html(c)
                                .fadeIn('slow');
                    }
            );
        }
        return false;
    });
});

