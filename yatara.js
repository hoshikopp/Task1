$(function(){
  $('.tab li').click(function(){
    $(this).addClass('select');
    $(this).siblings('li').removeClass('select');
    $('section').addClass('hide');
    const index = $('.tab li').index($(this))
    $('section').eq(index).removeClass('hide');
  })
});
