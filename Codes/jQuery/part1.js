$('h1').click(function(){
  console.log('There was click');
})

$('li').click(function(){
  console.log('this was clicked');
})

//KEY PRESS
$('input').eq(0).keypress(function(){
  $('h3').toggleClass('turnBlue');
})
