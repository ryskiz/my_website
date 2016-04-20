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
	window.sr = ScrollReveal({reset: true,duration:1000});
	sr.reveal(".circular",100);
    sr.reveal(".image");
    sr.reveal("h1");
    sr.reveal("h2");
    sr.reveal("p");
    //sr.reveal("a", {reset: true, duration: 1000});
});