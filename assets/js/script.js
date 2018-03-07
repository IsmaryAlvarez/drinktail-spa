var worker = null;
var loaded = 0;

$(document).ready(function () {
  var pagesID = 0;
  startLoading();
  // Paginas en Hide()
  $('.pages').hide();
  $('#page_0').show();
  //Splash Page 0
  splash(3500);
  function splash(time) {
    setTimeout(function () {
    $('#page_0').fadeOut(); }, time);
    $('#page_1').delay(4000).fadeIn();
    pagesID++;
  }

 // Movimiento Foto Home
  var x = 0;
  setInterval(function(){
    x-=1;
    $('.drinks-home').css('background-position', x  + '0' + 'px');
    }, 100);
  // Fin movimiento Foto Home

  // Inicio Firebase
  const email = $('#email').val();
  const password = $('#password').val();
  const btnRegister = $('#submit_register');
  const btnLogin = $('#submit_login');

  btnRegister.click(function () {

  })

  btnLogin.click(function () {
    /*const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password)*/
    $('#page_1').fadeOut();
    $('#page_2').delay(2000).fadeIn();
    random();
    getCategories();
    //filter('c', 'strCategory');
  })


})



// Cargador de Inicio
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
// Fin Cargador de Inicio

// API
function random(){
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-12 random-section">
      <div class="row">
      <div class="col-xs-5 col-md-offset-1 col-md-3">
      <img src="${drink.strDrinkThumb}" class="img-thumbnail">
      </div>
      <div class="col-xs-7 col-md-6">
      <h3 class="title">${drink.strDrink}</h3>
      <h5>Categoría: ${drink.strCategory}</h5>
      <h5>Tipo de Vaso: ${drink.strGlass}</h5>
      <button class="text-uppercase btn btn-info" onclick="getDrinkDetails(${drink.idDrink})">Detalles</button>
      </div>
      <div class="col-xs-12 col-md-12 text-center diviser"><button class="text-uppercase btn btn-default" onclick="random()">¡Voy a tener suerte!</button></div>
      </div>
      `;
      });
      $('#random-drink').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};

function getCategories(){
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-12 random-section">
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-3">
            <li class="text-uppercase"><h5>${drink.strCategory}</h5></li>
          </div>
        </div>
      </div>
      `; 
      //console.log(drink.strCategory);
      });

      $('#filter').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};

function getGlass(){
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-12 random-section">
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-3">
            <li class="text-uppercase"><h5>${drink.strGlass}</h5></li>
          </div>
        </div>
      </div>
      `; 
      //console.log(drink.strCategory);
      });

      $('#filter').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};

function getIngredients(){
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-12 random-section">
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-3">
            <li class="text-uppercase"><h5>${drink.strIngredient1}</h5></li>
          </div>
        </div>
      </div>
      `; 
      //console.log(drink.strCategory);
      });

      $('#filter').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};

// ID es c (Categoria), g (Glass), i (ingredientes)
/*function filter(id, key){
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/list.php?'+id+'=list')
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-12 random-section">
        <div class="row">
          <div class="col-xs-12 col-md-offset-1 col-md-3">
            <button class="btn btn-default text-uppercase"><h5>${drink.strCategory}</h5></button>
          </div>
        </div>
      </div>
      `; 
      //console.log(drink.strCategory);
      });

      $('#filter').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};*/