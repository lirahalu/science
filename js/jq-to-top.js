; (function ($) {
        $.fn.totop=function(opt){
            var ele=$(this);
            var timer=null;
            var isTop=true;
            var doc=$(document);
            var windowH=$(window).height();
            var options = $.extend({
                autohide: true
            }, opt);
            ele.css(
                {
                    'position': 'fixed',
                    'right': '10px',
                    'bottom': '10px',
                    'cursor': 'pointer',
                    'background-color':'rgba(0,0,0,0.2)',
                    'color':'#fff',
                    'padding':'4px',
                    'font-family':'Microsoft YaHei',
                    'font-size':'10px',
                    'display':'none'
                }
            );
            ele.on('click',function(){
                timer=setInterval(function(){
                    var scroll=doc.scrollTop();
                    isTop=true;
                    var speed=scroll/5;
                    doc.scrollTop(scroll-speed);
                    console.log(scroll);
                    if(scroll==0){
                        clearInterval(timer);
                    }
                },30);
            });
            doc.scroll(function(){
                if(options.autohide){
                    var scroll=doc.scrollTop();
                    if(scroll>windowH){
                        ele.show();
                    }else{
                        ele.hide();
                    }
                }else{
                    ele.show();
                }
                if(!isTop){
                    clearInterval(timer);
                }else{
                    isTop=false;
                }
            });
        };
    }
  )(jQuery);
