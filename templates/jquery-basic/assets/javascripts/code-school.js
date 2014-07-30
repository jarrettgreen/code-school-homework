var insertInstructions = function(){
  $('body').prepend('<div id="instructions"></div> <span id="instructions-toggle"> + Instructions </span>');
    var xhr = new XMLHttpRequest();
    var converter = new Showdown.converter();

    xhr.open('get', 'http://192.241.221.238/something.md', true);

    xhr.onload = function(e) {
      var insructionsMarkedDown = converter.makeHtml(xhr.responseText);
      $('#content').html(insructionsMarkedDown);
    };

    xhr.send();
}

$(function(){
  insertInstructions();

  $('#instructions').slideToggle();
  $('#instructions-toggle').click(function(){
    $('#instructions').slideToggle();
  })

})
