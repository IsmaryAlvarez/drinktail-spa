let submit = $('#submit');
let search;


submit.click(function(e) {
  e.preventDefault();
  search = $('#search').val();
  getDrinks();
});

function getDrinks(searchText) {
  axios.get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search)
    .then((response) => {

      let drinks = response.data.drinks;
      let output = '';
      $.each(drinks, (index, drink) => {
        output += `
      <div class="col-md-3">
      <div class="well text-center">
      <h5>${drink.strDrink}</h5>
      <h5>${drink.strGlass}</h5>
      <img src="http://${drink.strDrinkThumb}">
      </div>
      </div>
      `;
      });
      $('#container').html(output);
    })
    .catch((err) =>{
      console.log(err);
    });
}