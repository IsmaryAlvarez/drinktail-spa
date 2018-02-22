$(document).ready(function () {
  var userConnect = null;

  $('#modalRegister2').click(function () {
    $('#modalRegister').modal().show();
  })
  $('#submit_register').click(function () {
    var email = $('#email').val();
    var password = $('#password').val();
    if (password.length >= 6) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function () {
          verify();
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

  $('#submit_login').click( function () {
    var emailLogin = $('#email_login').val();
    var passwordLogin = $('#pwd_login').val();
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    $('#forgetpwd').click(function () {
    var auth = firebase.auth();
    var emailAddress = prompt('Ingresa tu correo');
    auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    }).catch(function(error) {
    // An error happened.
    });
    })

    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log(user);
      
     if (emailVerified) {
        // Si el usuario esta verificado, puede acceder al contenido
        showContentUsers();
      }
   }


    }); 

  });

})

function verify() {
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
      console.log(error);
    });
}

function showContentUsers () {
  // Cambio contenido main users
  var pageUser = `<header><img src="assets/img/logo.png" alt="" class="img-responsive img-center"></header>
                  <section id="page-user" class="container-fluid">
                    <div class="row">
                      <div class="col-xs-12 search-content">
                        <form action="">
                      <input type="search" id="search">
                      <input type="radio" name="gender" id="name">Nombre
                      <input type="radio" name="gender" id="ing">Ingrediente
                    <input type="submit" id="submit" name="Buscar">
      </form>
      </div>
      
      <!-- Resultados Busqueda -->
      <div id="results-search"></div>
      <div id="random-drink"></div>
      
      <div id="favoritos"></div>
                    </div>
                  </section>`;
  $('.navbar-right').html(`
    <li><a href="#" class="text-uppercase"><span><i class="fas fa-user"></i> </span>Mi Cuenta</a></li>
    <li><a href="#" class="text-uppercase"><span><i class="fas fa-window-close"></i> </span>Cerrar Sesión</a></li>`);
  $('#show-pages').html(pageUser);
  random();
  let submit = $('#submit');
  let search;


  submit.click(function(e) {
    e.preventDefault();
    search = $('#search').val();
    getDrinks();
  });
}