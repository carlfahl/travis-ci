// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// releated under the MIT license
(function(a){function b(a){(a.attr("title")||typeof a.attr("original-title")!="string")&&a.attr("original-title",a.attr("title")||"").removeAttr("title")}function c(c,d){this.$element=a(c),this.options=d,this.enabled=!0,b(this.$element)}c.prototype={show:function(){var b=this.getTitle();if(b&&this.enabled){var c=this.tip();c.find(".tipsy-inner")[this.options.html?"html":"text"](b),c[0].className="tipsy",c.remove().css({top:0,left:0,visibility:"hidden",display:"block"}).appendTo(document.body);var d=a.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight}),e=c[0].offsetWidth,f=c[0].offsetHeight,g=typeof this.options.gravity=="function"?this.options.gravity.call(this.$element[0]):this.options.gravity,h;switch(g.charAt(0)){case"n":h={top:d.top+d.height+this.options.offset,left:d.left+d.width/2-e/2};break;case"s":h={top:d.top-f-this.options.offset,left:d.left+d.width/2-e/2};break;case"e":h={top:d.top+d.height/2-f/2,left:d.left-e-this.options.offset};break;case"w":h={top:d.top+d.height/2-f/2,left:d.left+d.width+this.options.offset}}g.length==2&&(g.charAt(1)=="w"?h.left=d.left+d.width/2-15:h.left=d.left+d.width/2-e+15),c.css(h).addClass("tipsy-"+g),this.options.fade?c.stop().css({opacity:0,display:"block",visibility:"visible"}).animate({opacity:this.options.opacity}):c.css({visibility:"visible",opacity:this.options.opacity})}},hide:function(){this.options.fade?this.tip().stop().fadeOut(function(){a(this).remove()}):this.tip().remove()},getTitle:function(){var a,c=this.$element,d=this.options;b(c);var a,d=this.options;return typeof d.title=="string"?a=c.attr(d.title=="title"?"original-title":d.title):typeof d.title=="function"&&(a=d.title.call(c[0])),a=(""+a).replace(/(^\s*|\s*$)/,""),a||d.fallback},tip:function(){return this.$tip||(this.$tip=a('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')),this.$tip},validate:function(){this.$element[0].parentNode||this.hide()},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled}},a.fn.tipsy=function(b){function d(d){var e=a.data(d,"tipsy");return e||(e=new c(d,a.fn.tipsy.elementOptions(d,b)),a.data(d,"tipsy",e)),e}function e(){var a=d(this);a.hoverState="in",b.delayIn==0?a.show():setTimeout(function(){a.hoverState=="in"&&a.show()},b.delayIn)}function f(){var a=d(this);a.hoverState="out",b.delayOut==0?a.hide():setTimeout(function(){a.hoverState=="out"&&a.hide()},b.delayOut)}if(b===!0)return this.data("tipsy");if(typeof b=="string")return this.data("tipsy")[b]();b=a.extend({},a.fn.tipsy.defaults,b),b.live||this.each(function(){d(this)});if(b.trigger!="manual"){var g=b.live?"live":"bind",h=b.trigger=="hover"?"mouseenter":"focus",i=b.trigger=="hover"?"mouseleave":"blur";this[g](h,e)[g](i,f)}return this},a.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:!1,fallback:"",gravity:"n",html:!1,live:!1,offset:0,opacity:.8,title:"title",trigger:"hover"},a.fn.tipsy.elementOptions=function(b,c){return a.metadata?a.extend({},c,a(b).metadata()):c},a.fn.tipsy.autoNS=function(){return a(this).offset().top>a(document).scrollTop()+a(window).height()/2?"s":"n"},a.fn.tipsy.autoWE=function(){return a(this).offset().left>a(document).scrollLeft()+a(window).width()/2?"e":"w"}})(jQuery)