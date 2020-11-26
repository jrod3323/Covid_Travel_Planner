////Global Variables////

// Variable for Grabbing Elements

////////uncomment these

var stateInput = $(".selectState");
var cityInput = $(".selectCity");
var parkCard = $(".parksData");


var covidDataContainer = $(".covidDataContainer");
var usCovidData = $(".usCovidInfo")
// var searchForm = $(".selectStateForm");
// var activitySelector = $(".selectActivityForm")

////Functions////

//AJAX call for grabbing COVID data based on user state input
function formSubmitCOVID(event){
    event.preventDefault()
    // pulling user data for Postal Code
   
    // attach flag to state


    /////////uncomment variable after testing complete and delete static OH variable
    ////var state = stateInput.val();

    
    var state = "TX";
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
        card.append(cardImgDiv,cardContent);
        covidDataContainer.append(card);

    });
}


<<<<<<< HEAD
    // function formSubmitActivity(){
    //     //------------------------Google Places---------------------------
    //     var apiKey = `AIzaSyD2zafvdycgn34seHVFHLAXujSmlHcvMBg`;
    //     var googURL = `https://maps.googleapis.com/maps/api/place/details/output?parameters`;
    
    //     //ajax promise
    //     $.ajax({
    //         url: googURL,
    //         method :"GET"
    //         }).then(function(response) {
    //         console.log(response);
    //         console.log(googURL);
    
    
    //     $("#rvPark").html(response. ) ;
    //     $("#zoo").html(response. );
    //     $("#parks").html(response. );
    //     $("#rest").html(response. );
    //     $("#lodge").html(response. );
    //     $("#meal").html(response. );
    //     $("#camp").html(response. );
    //     $("#muse").html( response. );
    
    // console.log(googURL);
    
    //         })}
        
        
   
//------------------------------------------------------------------------------



=======


    function formSubmitActivity(){
        //------------------------Google Places---------------------------
        var cityInput = $("#searchedCity").val();
        var apiKey = `AIzaSyD2zafvdycgn34seHVFHLAXujSmlHcvMBg`;
        var googURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${cityInput}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${apiKey}`;
        console.log(googURL);

        // ajax promise
        $.ajax({
            url: googURL,
            method :"GET"
            }).then(function(response) {
            console.log(response);
            console.log(googURL);
    
    
        // $("#cityInput").html(response.) ;
        // $("#zoo").html(response. );
        // $("#parks").html(response. );
        // $("#rest").html(response. );
        // $("#lodge").html(response. );
        // $("#meal").html(response. );
        // $("#camp").html(response. );
        // $("#muse").html( response. );
    
    console.log(googURL);
    
            })}
        
//------------------------------------------------------------------------------


        
>>>>>>> b99ab5fe8f31ab209199624cde45d167ac80ea16
function currentUSData(){
        //URL to query for state COVID data
        var queryURL = `https://api.covidtracking.com/v1/us/current.json`;
   
        //empty that container for COVID data before appending new
        // covidDataContainer.empty();
        //AJAX
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
            //get the UV index
            console.log(response)
            //pulling data from API
            var totalDeath = response[0].death ;
            var deathIncrease = response[0].deathIncrease;
            var currentlyHospitalized = response[0].hospitalizedCurrently;
            var increasedHospitalizations = response[0].hospitalizedIncrease;
            var positiveTests = response[0].positive;
            var totalTests = response[0].totalTestResults ;
            var positivePercent = ((positiveTests/totalTests)*100).toFixed(2);

            //dynamic elements
            var card = $("<div>");
            var cardImgDiv = $("<div>");
            card.addClass("card");
            var cardImg = $("<img>");
            //need to add in state flag
            cardImg.attr("src", "https://m.media-amazon.com/images/I/51945vytmPL._AC_.jpg");
            cardTitle = $("<h1>").text("United States Data");
            cardTitle.addClass("card-title");
            var cardContent = $("<div>");
            cardContent.addClass("card-content");
            var item2 = $("<p>").text(`Total Deaths in US: ${totalDeath}`);
            var item3 = $("<p>").text(`US Increase in Deaths since previous update: ${deathIncrease}`);
            var item4 = $("<p>").text(`Current Hospitalizations in US: ${currentlyHospitalized}`);
            var item5 = $("<p>").text(`US Increase in hospitalizations since previous update: ${increasedHospitalizations}`);
            var item7 = $("<p>").text(`US Percentage of positive tests: ${positivePercent}%`);
            cardContent.append(
                item2,
                item3,
                item4,
                item5,
                item7,
                );
            cardImgDiv.append(cardImg);
            card.append(cardTitle,cardImgDiv,cardContent);
            usCovidData.append(card);
        });

}

//Git Google API Data on submit

function getGoogleInfo(){

    var state = "TX"
    // api URL
    var queryURL =  `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=eXglktNmNO6IDONNlFigDiX8R2vBAusn4PZi8eSs`;
    // Ajax call to API
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    //log the response from the api
    console.log(response);
    
    for(var i = 0; i<3; i++){
        var index = Math.floor(Math.random()*response.total);
        var parkName = response.data[index].fullName;
        console.log(parkName);
        var parkPic = response.data[index].images[0].url;
        console.log(parkPic);
        var parkURL = response.data[index].url;
        console.log(parkURL);

        var infoDiv = $("<div>");
        infoDiv.attr("id","test"+(i+4));
        var parkN = $("<h1>");
        parkN.text(parkName)
        var parkImg = $("<img>");
        parkImg.attr("src",parkPic).attr("alt",`Picture of ${parkName}`)
        var parkLink = $("<a>");
        parkLink.attr("href",parkURL).attr("target","_blank")
        parkLink.text("Here's a link to the parks website!")

        parkCard.append(infoDiv);
        infoDiv.append(parkN,parkImg,parkLink);
        

    }

    })
}
////Call functions////

$("button").on("click", formSubmitCOVID);
currentUSData();
getGoogleInfo();





