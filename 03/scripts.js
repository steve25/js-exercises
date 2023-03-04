//1st
$('#fox-1').text('Macrotis');

$('#fox-2').css('background-color', 'purple');

$('header p').css('background-color', 'yellow');

//2nd
let boxes = {
  color: 'purple',
  number: 10,
  word: 'cool'
}
$('.north').css('background-color', boxes.color);

if (boxes.number >= 100) {
  $('.east').text(`whoah, that's a big number.`);
} else {
  $('.east').text(`just a regular number, please.`);
}

if (boxes.word === 'cool') {
  $('.south').text(`Power of DOM`);
} else {
  $('.west').text(`Power of DOM`);
}