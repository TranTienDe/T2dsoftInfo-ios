// 幅と高さの調整
$(function() {
	$(document).ready(function() {
		var detail = $(".appSummary figure .detail");
		$(detail).each(function(){
			var detailW = $(this).width();
			var rankW = $(".rank",this).width();
			var titleW = detailW - rankW - 30;
			if(0 < $(".rank",this).size()){
				$("h1",this).css({
						'width' : titleW,
						'float' : 'right'
				});
			}
		});
		var footerMb = $("#totop").innerHeight();
		$("#footer").css({
				'margin-bottom' : footerMb,
		});
	});
});

// タブ
$(function() {
    $("#globalNavi ul li").click(function() {
        var num = $("#globalNavi ul li").index(this);
        $(".appSummary").addClass('none');
        $(".appSummary").eq(num).removeClass('none');
        $("#globalNavi ul li").removeClass('select');
        $(this).addClass('select')
    });
});

//totop
$(function() {
	$('#totop a').click(function () {
		$('body,html').animate({
				scrollTop: 0
		}, 400);
		return false;
	});
});