var insertInstructions = function(){
  $('body').prepend('<div id="instructions"></div> <span id="instructions-toggle"> + Instructions </span>');
}
$(function(){
  insertInstructions();
  $('#instructions').slideToggle();
  $('#instructions-toggle').click(function(){
    $('#instructions').slideToggle();
  })



})
