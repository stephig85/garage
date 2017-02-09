console.log('Connected!');

$(document).ready(function(){

// Bootstrap dropdown toggle

  $(function(){

    $(".dropdown-menu li a").click(function(){
      var carMake = $(this).text(); //
      var $parentUl = $(this).closest('ul');

      console.log('carmake is: ', carMake);

      $parentUl.prev().html([
        carMake,
        '<span class="caret"></span>'
      ].join(''));
   });
});


vehicleSpecs();

// Event handlers
$()

// Functions
function showVehicles(response){
  // console.log('showVehicle load ok');
  // console.log(response);
  var makes = response.makes;
  // console.log(makes);

    // creates the array for the car makes
    for(var i = 0; i < makes.length; i++) {

      var makeName = makes[i].name;
      var makeModels = makes[i].models;
      // console.log('makes: ', makeName);
      console.log('models: ', makeModels);

    // puts the array elements into a variable to be used later
    var chooseMake = ['<li>' + makeName +
    '</li>'].join('');
    // puts elements into html
    $('#choose-make').append(chooseMake);

    var chooseModel = ['<li>' + makeModels +
    '</li>'].join('');
    $('#choose-model').append(chooseModel);

  }
}

// Display results from vehicle_api.json
function vehicleSpecs(){

  var request = $.ajax({
    url: './vehicle_api.json'

  });
  console.log("vehicleSpecs is working: ");

  request.done(function(response) {
    showVehicles(response);
    });
  }


// AJAX CALLS
// GET vehicle makes
  // function vehicleMakes(){
  //   $.ajax({
  //     url: "https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2014&view=basic&fmt=json&api_key=kuwfw93bc7zgwjws8syxtu6w",
  //     // data: 'make' --- not sure if this is correct yet
  //   });
  //     console.log('Get vehicle makes works');
  //   //
  //   // request.done(function(response) {
  //   //   console.log(response);
  //   //   });
  // }

// Populate vehicle models based on make
  // function vehicleModels(){
  //   $.ajax({
  //     url: "https://api.edmunds.com/api/vehicle/v2/ford/mustang?view=basic&fmt=json&api_key=kuwfw93bc7zgwjws8syxtu6w"
  //   });
  //     console.log('Get vehicle make/model works');
  // }

}); //end of doc ready
