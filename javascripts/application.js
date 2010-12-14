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

    $("a.load-premium").click(function() {
        $("#details-premium").hide();
        if ($("#details-premium").attr('memo_url') == this.href) {
            $("#details-premium").attr('memo_url', '');
        } else {
            $("#details-premium").attr('memo_url', this.href);
            $.get(this.href,
                    function (c) {
                        $("#details-premium")
                                .html(c)
                                .fadeIn('slow');
                    }
            );
        }
        return false;
    });
});
