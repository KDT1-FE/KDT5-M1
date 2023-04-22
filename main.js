// Check active classes
let checkClass = function () {
  if ($('.item').hasClass('hide')) {
    $('.item').removeClass('hide');
  }
};

// Category filters
$('.all').click(function () {
  checkClass();
});
$('.com').click(function () {
  checkClass();
  $('.item:not(.com)').toggleClass('hide');
});
$('.ent').click(function () {
  checkClass();
  $('.item:not(.ent)').toggleClass('hide');
});
$('.life').click(function () {
  checkClass();
  $('.item:not(.life)').toggleClass('hide');
});
$('.shopping').click(function () {
  checkClass();
  $('.item:not(.shopping)').toggleClass('hide');
});
$('.fintech').click(function () {
  checkClass();
  $('.item:not(.fintech)').toggleClass('hide');
});
$('.business').click(function () {
  checkClass();
  $('.item:not(.business)').toggleClass('hide');
});
$('.news').click(function () {
  checkClass();
  $('.item:not(.news)').toggleClass('hide');
});
$('.game').click(function () {
  checkClass();
  $('.item:not(.game)').toggleClass('hide');
});


// Active tag
$('.btn-product').click(function () {
  $('.btn-product').removeClass('active');
  $(this).addClass('active');
})