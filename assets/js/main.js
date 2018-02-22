$(document).ready(function () {
  var userConnect = null;


  $('#submit_register').submit(function () {
    var email = $('#email').val();
    var password = $('#password').val();
    if (password.length >= 6) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function () {
          //verify();
      })
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    $('#modalRegister').html('<div class="modal-dialog"><!-- Modal content--><div class="modal-content register-form"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title"><h5 class="text-uppercase bold text-center">Registro Completado</h5></div><div class="content"><div class="modal-body"><!-- Mensaje Registro Exitoso --><h4>Su registro se ha realizado con éxito. Recibirá un correo de verificación.</h4><button type="button" data-dismiss="modal" class="btn btn-primary btn-send text-uppercase">Cerrar</button></form></div></div></div></div>');
    }
    else {
      alert('Email: Ingrese un correo válido. \nContraseña: debe tener al menos 6 caracteres.');
    }
  });

  $('#submit_login').submit( function () {
    var emailLogin = $('#email_login').val();
    var passwordLogin = $('#pwd_login').val();
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  })  
})
