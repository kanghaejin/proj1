$(function(){

$('#top_popup > button').click(function(){
  $('#top_popup').hide();
})
$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    
   
  });
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots:false
  });

  $(function(){
    var slide;
    slide = setInterval(function(){
        $('#sec2 .notice > div:first-child').animate({
          'margin-top':'-41px'},900,function(){
              $('#sec2 .notice').append($('#sec2 .notice > div:nth-child(1)'));
              $('#sec2 .notice > div:nth-child(3)').css(
                                  {'margin-top':'41px'})
          });
        },1800)
    });
    $(function(){
      var slide;
      slide = setInterval(function(){
          $('#sec2 .purp > div:first-child').animate({
            'margin-top':'-41px'},900,function(){
                $('#sec2 .purp').append($('#sec2 .purp > div:nth-child(1)'));
                $('#sec2 .purp > div:nth-child(3)').css(
                                    {'margin-top':'41px'})
            });
          },1800)
      });
})