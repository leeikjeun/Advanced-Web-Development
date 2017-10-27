$(window).scroll(func)

var $html = $('html');
function func(){
  if($html.scrollTop() > 350)
      $('.img-box').show('slow');
  else
      $('.img-box').hide('slow');
}

$('.img-box').css({position: 'fixed', bottom: 10, right : 10});
$('.img-box').hide('slow');

$('.img-box').on('click',function(e){
  $html.scrollTop(0);


  return false;
});
