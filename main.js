$(document).ready(function() {
    $('#fullpage').fullpage({
    	menu: '#menu',
        anchors: ['firstPage', 'secondPage', 'thirdPage'],
        autoScrolling: false
    });
});
 $(function (){
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
	})
});
$(function (){
	$('#fullpage').visibility({
	once       : false,
    continuous : true,
    onPassing : function(calculations){
    	var newColor = 'rgba(186, 252, 241, ' + calculations.percentagePassed * 1.5 +')';
      $(this).css('background-color', newColor);
  }
})
});
$(function (){
	$('#fullpage .section img,h1,p').visibility({
    onBottomVisible : function(calculations){
    	$(this).transition({
    		animation :'fade up in', 
    		duration  :2000
    	});
    }
	})
});