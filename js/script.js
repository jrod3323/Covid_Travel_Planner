////Global Variables////

// Variable for Grabbing Elements

////////uncomment these
// var stateInput = $(".selectState");
// var cityInput = $(".selectCity");
// var yelpDataContainer = $("$.yelpDataContainer");
// var covidDataContainer = $(".covidDataContainer");
// var searchForm = $(".selectStateForm");
// var activitySelector = $(".selectActivityForm")

////Functions////

//AJAX call for grabbing COVID data based on user state input
function formSubmitCOVID(){
    
    // pulling user data for Postal Code
    
    /////////uncomment variable after testing complete and delete static OH variable
    ////var state = stateInput.val();
    
    var state = "OH"
    //URL to query for state COVID data
    var queryURL = `https://api.covidtracking.com/v1/states/${state}/current.json`;
   
    //empty that container for COVID data before appending new
    // covidDataContainer.empty();
    //AJAX
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        //get the UV index
        console.log(response)
        
        //grabbing necessary data
        var lastUpdate = response.lastUpdateEt;
        console.log(lastUpdate);
        var totalDeaths = response.death;
        console.log(totalDeaths);
        var deathIncreaseSinceLast = response.deathIncrease;
        console.log(deathIncreaseSinceLast);
        var currentlyHospitalized = response.hospitalizedCurrently;
        console.log(currentlyHospitalized);
        var increasedHospitalizations = response.hospitalizedIncrease;
        console.log(increasedHospitalizations);
        var probableDeaths = response.deathProbable;
        console.log(probableDeaths);
        var positiveTests = response.positiveCasesViral;
        console.log(positiveTests);
        var totalTests = response.totalTestsViral;
        console.log(totalTests)
        var positivePercent = ((positiveTests/totalTests)*100).toFixed(2);
        console.log(positivePercent);

    });
}


function formSubmitYelp(){
        // pulling user data for Postal Code
    
    /////////uncomment variable after testing complete and delete static OH variable
    ////var state = stateInput.val();
    ////var city = cityInput.val().trim();
    ////var cityState = (city+", "+state)
    ////var activity = selectActivityForm.val();
    var cityState = "austin, tx"
    var activity = "hiking"
    //URL to query for state COVID data
    var queryURL = `https://api.yelp.com/v3/businesses/search?term=${activity}&location=${cityState}`;
   
    //empty that container for COVID data before appending new
    // covidDataContainer.empty();
    //AJAX
    $.ajax({
        url: queryURL,
        headers: { 
            'Authorization': 'Bearer W0lfFIcb5fb4fUDSVy2zgoPH7PTpRQpqjxVXXVJJfQ2ls3yKYnxFV1dwQaoM959N2UWBLaKY3rIh7BhuiMlLMainwbKGIGK4VJDsyK8L3YnSb6_OAuJGj1u_gD25X3Yx',
            'Access-Control-Allow-Origin': '*',
        },
        method: "GET",
        }).then(function(response) {
        //get the UV index
        console.log(response)
        
        //grabbing necessary data


    });
}

////Call functions////
formSubmitCOVID();
formSubmitYelp();