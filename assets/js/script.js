var worker = null;
var loaded = 0;

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

 // Movimiento Foto Home
  var x = 0;
  setInterval(function(){
    x-=1;
    $('.drinks-home').css('background-position', x  + '0' + 'px');
    }, 100);
  

  // Inicio Firebase
  const email = $('#email').val();
  const password = $('#password').val();
  const btnRegister = $('#submit_register');
  const btnLogin = $('#submit_login');

  btnRegister.click(function () {

  })

  btnLogin.click(function () {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password)
  })


})

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

