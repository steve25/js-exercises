// add new
$('.add').click(() => {
  let id = $('section ul li').length;
  let todo = $.trim($('#todo-input').val());

  if (todo != '') {

    $('section ul').append('<li class="todo"><div class="content">'+todo+'</div><div class="icons"><img class="delete" src="img/trash.svg" alt="delete" width="30px" /><img class="check" src="img/check.svg" alt="ok" width="30px" /></div></li>');

    $('#todo-input').val('');
    $('#todo-input').focus();
  }

  console.log();
});

// delete
$('section ul').on('click', '.delete', (id) => {
  $(id.target).parent().parent().remove();
});

// check
$('section ul').on('click', '.check', (id) => {
  if ($(id.target).parent().parent().attr('class') !== 'todo completed') {
    $(id.target).parent().parent().addClass('completed');
  } else {
    $(id.target).parent().parent().removeClass('completed');
  }
});