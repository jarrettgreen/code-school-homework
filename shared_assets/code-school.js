var insertInstructions = function(){
  $('body').prepend("<div id='instructions'>"+instructions+"</div> <span id='instructions-toggle'> Toggle Instructions </span>");
}

$(function(){
  insertInstructions();

  $('#instructions').slideToggle();
  $('#instructions-toggle').click( function() {
    $('#instructions').slideToggle();
  })

})
