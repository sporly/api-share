new function() {
	var _self = this;
	_self.width = 640; //设置默认最大宽度
	_self.fontSize = 100; //默认字体大小
	_self.widthProportion = function() {
		var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
		return p > 1 ? 1 : p < 0.5 ? 0.5 : p;
	};
	_self.changePage = function() {
		document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
	}
	_self.changePage();
	window.addEventListener('resize', function() {
		_self.changePage();
	}, false);
};
/*头部滚动文字S*/
 var speed=60
    var demo=document.getElementById("demo");
    var demo2=document.getElementById("demo2");
    var demo1=document.getElementById("demo1");
    demo2.innerHTML=demo1.innerHTML
    function Marquee(){
        console.log(demo2.offsetTop,demo.scrollTop,demo1.offsetHeight,demo.scrollTop);
        if(demo2.offsetTop-demo.scrollTop<=0)
            demo.scrollTop-=demo1.offsetHeight;
        else{
            demo.scrollTop++
        }
    }
    var MyMar=setInterval(Marquee,speed)
    demo.onmouseover=function() {clearInterval(MyMar)}
    demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
 /*头部滚动文字E*/   

/*弹框遮罩S*/
$(function(){
  	$('.bomb-btn').click(function(){
  		$('.bomb-wrap').show();
  		$('body').addClass('bomb-fiexd');
  	});
  	$('.bomb-wrap').click(function(){
  		$('.bomb-wrap').hide();
  		$('body').removeClass('bomb-fiexd');
  	});
  })
/*弹框遮罩E*/



