// console.log('Connected!');
$(document).ready(function(){

// Bootstrap dropdown toggle
//   $(function(){
//
//     $(".dropdown-menu li a").click(function(){
//       var carMake = $(this).text(); //
//       var $parentUl = $(this).closest('ul');
//
//       // console.log('carmake is: ', carMake);
//
//       $parentUl.prev().html([
//         carMake,
//         '<span class="caret"></span>'
//       ].join(''));
//    });
// });

// Functions
// vehicleEdmundsSpecs();
// vehicleSpecs1();
// vehicleSpecs2();
// vehicleSpecs3();

// Event Handlers
  $('#vehicle1').on('click', vehicleSpecs1);
  $('#vehicle2').on('click', vehicleSpecs2);
  $('#vehicle3').on('click', vehicleSpecs3);

function specifications(response){
  // console.log('specifications loads');
  // var specs = response;
  var name = response.vehicleName;
  var year = response.vehicleYear;
  var makeModel = response.vehicleMake + ' ' + response.vehicleModel;
  var frontTire = response.tires.frontTireSize + ' -- ' + response.tires.frontTirePressure;
  var rearTire = response.tires.rearTireSize + ' -- ' + response.tires.rearTirePressure;
  var oil = response.fluids.oilType + ' -- ' + response.fluids.oilCapacity;
  var fuel = response.fluids.fuelTankCapacity + ' -- ' + response.fluids.fuelGrade;
  // console.log(specs);

  // Empty previous results
  $('#vehicle-specs').empty();

  var specData = ['<table class="table no-border">' +
  '<tr>' +
  '<td>Name: </td><td>' + name + '</td>' +
  '</tr>' +
  '<tr>' +
  '<td>Year: </td><td>' + year + '</td>' +
  '<tr>' +
  '<td>Make/Model: </td><td>' + makeModel + '</td>' +
  '</tr>' +
  '<th>Tires</th>' +
  '<tr>' +
  '<td>Front Tire: </td><td>' + frontTire + '</td>' +
  '</tr>' +
  '<tr>' +
  '<td>Rear Tire: </td><td>' + rearTire + '</td>' +
  '</tr>' +
  '<th>Fluids/Capacities</th>' +
  '<tr>' +
  '<td>Oil Type: </td><td>' + oil + '</td>' +
  '</tr>' +
  '<tr>' +
  '<td>Fuel: </td><td>' + fuel + '</td>' +
  '</tr>' +
  '</table>'].join('');

  $('#vehicle-specs').html(specData);
}

// Showroom Functions
function vehicleSpecs1(){
  // console.log('vehicleSpecs1 function loads');
  var request=$.ajax({
    url:'../vehicle1.json'
  });
  request.done(function(response){
    console.log("vehicle1 request works");
    specifications(response); // name of function controlling where data is appended
    // console.log(response);
  });
}

function vehicleSpecs2(){
  // console.log('vehicleSpecs2 function loads');
  var request=$.ajax({
    url: '../vehicle2.json'
  });
  request.done(function(responseTwo){
    console.log("vehicle2 request works");
    specifications(responseTwo); // name of function controlling where data is appended
    // console.log(responseTwo);
  });
}

function vehicleSpecs3(){
  // console.log('vehicleSpecs3 function loads');
  var request=$.ajax({
    url:'./vehicle3.json'
  });
  request.done(function(responseThree){
    console.log("vehicle3 request works");
    specifications(responseThree); // name of function controlling where data is appended
    // console.log(responseThree);
  });
}

// Add Vehicle Functions

  // Submit form
  $('#newVehicleForm').on('submit', function(e) {
    // console.log('form submitted');
    // Stop the form from submitting
    e.preventDefault();
    // alert('form submitted');
    // var newVehicle = $('newVehicleForm').serialize();
    // $.post('newVehicle.json', newVehicle, function(data) {
    //   alert("form submitted");
    // })

    $('#newVehicleForm').empty();
    $('#newVehicleForm').html('New Vehicle Added! <br />');

    $('#newVehicleForm').append('<button class="add-another">Add Another</button>');
    // console.log('form cleared');
  });


// function showVehicles(response){
//   // console.log('showVehicle load ok');
//   // console.log(response);
//   var makes = response.makes;
//   // console.log(makes);
//
//     // creates the array for the car makes
//     for(var i = 0; i < makes.length; i++) {
//
//       var makeName = makes[i].name;
//       var makeModels = makes[i].models;
//       // console.log('makes: ', makeName);
//       // console.log('models: ', makeModels);
//
//     // puts the array elements into a variable to be used later
//     var chooseMake = ['<li>' + makeName +
//     '</li>'].join('');
//     // puts elements into html
//     $('#choose-make').append(chooseMake);
//
//     var chooseModel = ['<li>' + makeModels +
//     '</li>'].join('');
//     $('#choose-model').append(chooseModel);
//
//   }
// }

// Display results from vehicle_api.json
// function vehicleEdmundsSpecs(){
//
//   var request = $.ajax({
//     url: './vehicle_api.json'
//
//   });
//   // console.log("vehicleSpecs is working: ");
//
//   request.done(function(response) {
//     showVehicles(response);
//     });
//   }


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
