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
      <img src="http://${drink.strDrinkThumb}" class="img-thumbnail">
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
      <div class="col-xs-5 col-md-offset-1 col-md-3">
      <img src="http://${drink.strDrinkThumb}" class="img-thumbnail">
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
      console.log(${drink.strCategory});
      });

      //$('#random-drink').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
};