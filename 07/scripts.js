let counter = $('h3').val();
$('#increase').click(() => {
  counter++
  $('h3').text(counter);
})

$('#decrease').click(() => {
  counter--
  $('h3').text(counter);
})