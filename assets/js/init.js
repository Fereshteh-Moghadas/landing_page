jQuery(document).ready(function(){

	"use strict";
	orido_tm_modalbox();
	orido_tm_counter();
	jQuery(window).load('body', function(){
		orido_tm_my_load();
		setTimeout(function() {
			orido_tm_portfolio_masonry();
		}, 500);
	});
	
	jQuery(window).on('scroll', function(){
		orido_tm_progress_line();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------   COUNTER    -------------------
// -----------------------------------------------------

function orido_tm_counter(){
	
	"use strict";
	
	$('.counter_item').each(function() {
		
		var el		= $(this);
			el.waypoint({
				handler: function(){
					if(!el.hasClass('stop')){
						el.addClass('stop').countTo({
							refreshInterval: 50,
							formatter: function (value, options) {
								return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
							},	
						});
					}
				},offset:'95%'	
			});
		});	
}

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function orido_tm_modalbox(){
	
	"use strict";
	
	jQuery('.orido_tm_all_wrap').prepend('<div class="orido_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}