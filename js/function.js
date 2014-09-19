(function ($) {

    $.fn.isOnScreen = function(x, y){

        if(x == null || typeof x == 'undefined') x = 1;
        if(y == null || typeof y == 'undefined') y = 1;

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var height = this.outerHeight();
        var width = this.outerWidth();

        if(!width || !height){
            return false;
        }

        var bounds = this.offset();
        bounds.right = bounds.left + width;
        bounds.bottom = bounds.top + height;

        var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

        if(!visible){
            return false;
        }

        var deltas = {
            top : Math.min( 1, ( bounds.bottom - viewport.top ) / height),
            bottom : Math.min(1, ( viewport.bottom - bounds.top ) / height),
            left : Math.min(1, ( bounds.right - viewport.left ) / width),
            right : Math.min(1, ( viewport.right - bounds.left ) / width)
        };

        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

    };

})(jQuery);

function checkScreen (){

	if($("#register").isOnScreen()){

		document.getElementById('registerLink').style.borderBottom = 	"2px solid #22313F"
		document.getElementById('teamLink').style.borderBottom = 	"none"
		document.getElementById('teaserLink').style.borderBottom = 	"none"
	}else if ($("#team").isOnScreen()) {

		document.getElementById('teamLink').style.borderBottom = 	"2px solid #22313F"
		document.getElementById('teaserLink').style.borderBottom = 	"none"
		document.getElementById('registerLink').style.borderBottom = 	"none"
	}else {
		document.getElementById('teaserLink').style.borderBottom = 	"2px solid #22313F"
		document.getElementById('registerLink').style.borderBottom = 	"none"
		document.getElementById('teamLink').style.borderBottom = 	"none"
	}
};

window.onscroll= checkScreen;