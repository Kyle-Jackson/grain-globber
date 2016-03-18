var $grains = $('grains')
var $ul = $('ul');
var $h2 = $('h2');
var $p = $('p');
var $li = $('li');


$h2.html('Grains');
$ul.addClass('grains');

$('.more-grains').remove();

grains.forEach(function (grains) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(grains.name);
  $img.attr('src', 'images/' + grains.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);


});
