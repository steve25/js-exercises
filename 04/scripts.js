// names
let names = ['Jano', 'Marek', 'Steve', 'Janka', 'Hanka', 'Adelka'];
$('body').append(
  '<ul>'
);
names.forEach(name => {
  if (name !== 'Steve') {
    $('body').append(
      '<li>'+name+'</li>'
    );
    } else {
      $('body').append(
        '<li><strong>'+name+'</strong></li>'
      );
    }
});
$('body').append(
  '</ul>'
);

// 2nd
let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('title').html(additionalBlock.title);
$('p').html(additionalBlock.text);