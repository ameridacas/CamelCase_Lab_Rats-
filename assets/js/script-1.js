// This file contains the js code for seeing how many views a user-specified subject has had on Wikipedia in a ten day period.

// Variable for adding up total views
var totalViews = 0
// Array for storing past views
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
        console.log(pastViewsArray);
        localStorage.setItem("storedViews", JSON.stringify(pastViewsArray));
    }
}


// This is a test variable representing the subject item selected by the user or taken from the movie api
var subject = "Guardians of the Galaxy";

// Replace spaces in subject with underscores
var subjectConverted = subject.replace(/\s/g, "_");
console.log(subjectConverted);


// **Draft function wrapper for getViewsAPI function
// function getLyricsAPI() {move end bracket to the bottom when uncommented}

// placeholder lyrics URL variable
var viewsURL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/" + subjectConverted + "/daily/2023070100/2023072700";


// fetch request from wikimedia
fetch(viewsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (viewsData) {
        // variable and console for viewing full array data (developer tool only)
        var subjectViews = viewsData;
        console.log(subjectViews)
        

        for (i = 0; i < 10; i++) {
            console.log(viewsData.items[i].views)
            // add up the views over the ten day period
            totalViews = totalViews + viewsData.items[i].views
        }

        // Display the total views for the ten day period in the console
        console.log(totalViews);
        saveViewData()

    })

