var $h1 = $('h1');
var $ul = $('ul');

$h1.html('Dinosaurs!');
$ul.addClass('grains');

$('.more-grains').remove();

grains.forEach(function (grains) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(grains.name)
  $img.attr('src','images/' + grains.img);

  $figure.append($img, $caption)
  $li.append($figure)
  $ul.append($li);

});
