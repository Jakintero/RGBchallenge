var correct = Math.floor(Math.random() * 2);


$('.option').each(function(index) {


  var color = generateColor();
  $(this).css('background-color', color);

  if (index == correct) {
    $('.question').text(color);
  }
});

function random() {
  return Math.floor(Math.random() * 255);
}

function generateColor() {
  return 'rgb('+random()+', '+random()+', '+random()+')';
}
