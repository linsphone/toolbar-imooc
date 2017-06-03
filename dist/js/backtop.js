define(['jquery','scrollto'], function($,scrollto) {
	function BackTop(el,opts) {
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el=$(el);
		this.scroll=new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		this._checkPosition();
		if(this.opts.model=='move'){
			this.$el.on("click",$.proxy(this._move,this));
		}else{
			this.$el.on("click",$.proxy(this._go,this));
		}

		$(window).on("scroll",$.proxy(this._checkPosition,this));
	}
	BackTop.prototype._move = function() {
		this.scroll.move();
	};
	BackTop.prototype._go = function() {
		this.scroll.go();
	};
	BackTop.prototype._checkPosition = function() {
		if($(window).scrollTop()>this.opts.pos){
			
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	};
	BackTop.DEFAULTS={
		model:'move',
		pos:$(window).height()
	}

	$.fn.extend({
		backtop:function (opts) {
			return this.each(function() {
				new BackTop(this,opts);
			});
			 
		}
	})
	return {
		BackTop:BackTop
	}
});
