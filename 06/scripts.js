$('#1stButton').click(() => {
  console.log('Yeah, you clicked me');
});

$('#2ndButton').click(() => {
  $('#1stButton').text('Changed value');
})

$('#3rdButton').one ('click',() => {
  $('button').css('background-color', $('#input').val())
})

