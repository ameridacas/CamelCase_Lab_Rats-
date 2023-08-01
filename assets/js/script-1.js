// This file contains the js code for seeing how many views a user-specified subject has had on Wikipedia in a ten day period.

// Variable for adding up total views
var totalViews = 0;
var totalViews2020 = 0;
var totalViews2021 = 0;
var totalViews2022 = 0;
var totalViews2023 = 0;
// Array for storing past views
// ***NOTE***Create objects for the past ten scores for this array to hold so that the movie title and the view count can be displayed. See the quiz challenge.
var pastViewsArray = []

// This function saves the historical view data from previous subjects.
function saveViewData() {
    // If nothing exists in local storage, add the totalViews to the pastViewsArray, stringify the array, and store it in local storage
    if (localStorage.getItem("storedViews") === null) {
        pastViewsArray.unshift(totalViews);
        localStorage.setItem("storedViews", JSON.stringify(pastViewsArray));
    } else {
        // If views exist in local storage, parse the stored data into the pastViewsArray, then add the totalViews to the beginning of the array, then stringify the array and store it in local storage.
        pastViewsArray = JSON.parse(localStorage.getItem("storedViews"));
        pastViewsArray.unshift(totalViews);
        // console.log(pastViewsArray);
        localStorage.setItem("storedViews", JSON.stringify(pastViewsArray));
    }
}


// This is a test variable representing the subject item selected by the user or taken from the movie api
// var subject = "Guardians of the Galaxy";

// var testArray = ["Gladiator","Braveheart","Star Wars","Dune","","Star Trek","Sherlock","","High Plains Drifter","","Titanic"]
// console.log(testArray);
// localStorage.setItem("testLocal", testArray);
// console.log(localStorage.getItem("testLocal"));
// var subjectTest = testArray[testArray.length - 1];
// console.log(subjectTest);


// var movieArray = localStorage.getItem(["userInputOmbdMovieName"]);
// console.log(movieArray);
var subject = "Avatar";
console.log(subject);
// var currentDate = dayjs()
// console.log(currentDate);


// Replace spaces in subject with underscores
var subjectConverted = subject.replace(/\s/g, "_");
console.log(subjectConverted);


// **Draft function wrapper for getViewsAPI function
// function getviewsAPI() {move end bracket to the bottom when uncommented}

// placeholder wikimedia views URL variable
// var viewsURL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/" + subjectConverted + "/daily/2023060100/2023063000";

// Monthly article views from 01/01/2020 to 06/30/2023
var viewsURL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2020010100/2023063000";

// Monthly article views for 2020
var viewsURL2020 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2020010100/2020123100";

// Monthly article views for 2021
var viewsURL2021 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2021010100/2021123100";

// Monthly article views for 2022
var viewsURL2022 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2022010100/2022123100";

// Monthly article views for 2023
var viewsURL2023 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2023010100/2023063000";



// fetch request from wikimedia
// fetch(viewsURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (viewsData) {
//         // variable and console for viewing full array data (developer tool only)
//         // var subjectViews = viewsData;
//         // console.log(subjectViews);
//         console.log(viewsData);


//         for (i = 0; i < 42; i++) {
//             // console.log(viewsData.items[i].views)
//             // add up the views over the specified time period
//             totalViews = totalViews + viewsData.items[i].views
//             // console.log(totalViews);
//         }

//         // Display the total views for the ten day period in the console
//         console.log(totalViews);
//         saveViewData()
    // })


    // fetch request from wikimedia 2020
fetch(viewsURL2020)
.then(function (response) {
    return response.json();
})
.then(function (viewsData2020) {
    // variable and console for viewing full array data (developer tool only)
    // var subjectViews = viewsData;
    // console.log(subjectViews);
    console.log(viewsData2020);


    for (i = 0; i < 12; i++) {
        // console.log(viewsData.items[i].views)
        // add up the views over the specified time period
        totalViews2020 = totalViews2020 + viewsData2020.items[i].views;
        // console.log(totalViews);
    }

    // Display the total views for the ten day period in the console
    console.log("Total Views 2020: " + totalViews2020);
    saveViewData()

})

 // fetch request from wikimedia 2021
 fetch(viewsURL2021)
 .then(function (response) {
     return response.json();
 })
 .then(function (viewsData2021) {
     console.log(viewsData2021);
  
     for (i = 0; i < 12; i++) {
        totalViews2021 = totalViews2021 + viewsData2021.items[i].views;
         
     }
 
     console.log("Total Views 2021: " + totalViews2021);
     saveViewData()
 
 })
 
 // fetch request from wikimedia 2022
 fetch(viewsURL2022)
 .then(function (response) {
     return response.json();
 })
 .then(function (viewsData2022) {
     console.log(viewsData2022);
  
     for (i = 0; i < 12; i++) {
        totalViews2022 = totalViews2022 + viewsData2022.items[i].views;
         
     }
 
     console.log("Total Views 2022: " + totalViews2022);
     saveViewData()
 
 })

 // fetch request from wikimedia 2023
 fetch(viewsURL2023)
 .then(function (response) {
     return response.json();
 })
 .then(function (viewsData2023) {
     console.log(viewsData2023);
  
     for (i = 0; i < 6; i++) {
        totalViews2023 = totalViews2023 + viewsData2023.items[i].views;
         
     }
 
     console.log("Total Views 2023: " + totalViews2023);
     saveViewData()
 
 })
 
 
