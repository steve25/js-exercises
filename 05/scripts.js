$('#1stButton').click(() => {
  console.log('Yeah, you clicked me');
});

$('#2ndButton').click(() => {
  $('#1stButton').text('Changed value');
})

$('#3rdButton').click (() => {
  $('button').css('background-color', 'lime')
})
