$(document).ready(function () {
  var pagesID = 0;
  startLoading();
  // Paginas en Hide()
  $('.pages').hide();
  $('#page_0').show();
  // Splash Page 0
  splash(3000);
  function splash(time) {
    setTimeout(function () {
    $('#page_0').fadeOut(); }, time);
    $('#page_1').delay(3500).fadeIn();
    pagesID++;
  }
})


var worker = null;
var loaded = 0;

function increment() {
    $('#counter').html(loaded+'%');
    $('#drink').css('top', (100-loaded*.9)+'%');
    if(loaded==25) $('#cubes div:nth-child(1)').fadeIn(100);
    if(loaded==50) $('#cubes div:nth-child(2)').fadeIn(100);
    if(loaded==75) $('#cubes div:nth-child(3)').fadeIn(100);
    if(loaded==100) {
        $('#lemon').fadeIn(100);
        $('#straw').fadeIn(300);
        loaded = 0;
        stopLoading();
        setTimeout(startLoading, 1000);
    }
    else loaded++;    
}

function startLoading() {
    $('#lemon').hide();
    $('#straw').hide();
    $('#cubes div').hide();
    worker = setInterval(increment, 30);
}
function stopLoading() {
    clearInterval(worker);
}

