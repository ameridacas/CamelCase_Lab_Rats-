// This file contains the js code for seeing how many views a user-specified subject has had on Wikipedia in a ten day period.


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
        // Variable for adding up total views
        var totalViews = 0

        for (i = 0; i < 10; i++) {
            console.log(viewsData.items[i].views)
            // add up the views over the ten day period
            totalViews = totalViews + viewsData.items[i].views
        }

        // Display the total views for the ten day period in the console
        console.log(totalViews);

    })

