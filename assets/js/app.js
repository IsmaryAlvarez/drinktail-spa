$(document).ready(function () {
  random();
})


let submit = $('#submit');
let search;
let name;

submit.click(function(e) {
  e.preventDefault();
  search = $('#search').val();
  if( $('#name').checked === true){
  getDrinks();
  }else{
   getDrinksByIng();
  }
});

function getDrinks(searchText) {
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search)
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-xs-6 col-md-3">
      <div class="well text-center">
      <h5>${drink.strDrink}</h5>
      <h5>${drink.strGlass}</h5>
      <img src="http://${drink.strDrinkThumb}" class="img-thumbnail">
      <div><span><i class="fas fa-heart"></i></span><span><i class="fas fa-info-circle"></i></span></div>
      </div>
      </div>
      `;
      });
      $('#results-search').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
}

function getDrinksByIng(Text){
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + search)
    .then((response) => {
      console.log(response);
      let drinks = response.data.drinks;
      let output = '';
      if (drinks === undefined){
      alert('No tenemos registrados cocktails con éste ingrediente');
      }
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-xs-6 col-md-3">
      <div class="well text-center">
      <h5>${drink.strDrink}</h5>
      <img src="http://${drink.strDrinkThumb}" class="img-thumbnail">
      <div><span><i class="fas fa-heart"></i></span><span><i class="fas fa-info-circle"></i></span></div>
      </div>
      </div>
      `;
      });
      $('#results-search').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });

}

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
      <div class="col-xs-4 col-md-offset-1 col-md-3">
      <img src="http://${drink.strDrinkThumb}" class="img-thumbnail">
      </div>
      <div class="col-md-6">
      <h3 class="title">${drink.strDrink}</h3>
      <h5>Categoría: ${drink.strCategory}</h5>
      <h5>Tipo de Vaso: ${drink.strGlass}</h5>
      </div>
      <div class="col-xs-6 col-xs-offset-2 col-md-1 text-right"><button class="text-uppercase btn btn-info" onclick="getDrinkDetails(${drink.idDrink})">Detalles</button></div>
      <div class="col-md-12 text-center"><button class="text-uppercase btn btn-default" onclick="random()">¡Voy a tener suerte!</button></div>
      </div>
      `;
      });
      $('#random-drink').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};

// Funcion para obtener los datos por ID
function getDrinkDetails (id) {
  console.log(id);
  axios.get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((response) => {
      let drinks = response.data.drinks;
      let output = '';
      console.log(response.data.drinks);
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-12 random-section">
      <div class="row">
      <div class="col-xs-4 col-md-offset-1 col-md-3">
      <img src="http://${drink.strDrinkThumb}" class="img-thumbnail">
      </div>
      <div class="col-md-6">
      <h3 class="title">${drink.strDrink}</h3>
      <h5>Categoría: ${drink.strCategory}</h5>
      <h5>Tipo de Vaso: ${drink.strGlass}</h5>
      </div>
      </div>
      `;
      });
      $('#page-user-fav').html(output);
      
    })
    .catch((err) =>{
      console.log(err);
    });
}

