////Global Variables////

// Variable for Grabbing Elements

////////uncomment these
// var stateInput = $(".selectState");
// var cityInput = $(".selectCity");
// var yelpDataContainer = $("$.yelpDataContainer");
var covidDataContainer = $(".covidDataContainer");
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

        var card = $("<div>");
        var cardImgDiv = $("<div>")
        card.addClass("card");
        var cardImg = $("<img>");
        //need to add in state flag
        cardImg.attr("src", "");
        cardTitle = $("<span>").text("STATE");
        cardTitle.addClass("card-title");
        var cardContent = $("<div>");
        cardContent.addClass("card-content");
        var item1 = $("<p>").text(`Date of last update: ${lastUpdate}`);
        var item2 = $("<p>").text(`Total Deaths: ${totalDeaths}`);
        var item3 = $("<p>").text(`Increase in Deaths since previous update: ${deathIncreaseSinceLast}`);
        var item4 = $("<p>").text(`Current Hospitalizations: ${currentlyHospitalized}`);
        var item5 = $("<p>").text(`Increase in hospitalizations since previous update: ${increasedHospitalizations}`);
        var item6 = $("<p>").text(`Probable Deaths: ${probableDeaths}`);
        var item7 = $("<p>").text(`Percentage of positive tests: ${positivePercent}%`);
        cardContent.append(
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            );
        cardImgDiv.append(cardImg,cardTitle);
        card.append(cardImgDiv,cardConten);


    });
}

////Call functions////
formSubmitCOVID();