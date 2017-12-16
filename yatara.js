$(function(){
  $('.tab li').click(function(){
    $(this).addClass('select');
    $('section').addClass('hide');
    const index = $('.tab li').index($(this))
    $('section').eq(index).removeClass('hide');
  })
});
