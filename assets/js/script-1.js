// TODO:
// 1. Get local storage value from Jose's code to get title
// 2. Create code to populate elements on webpage, look at the created divs
// 3. Figure out how to ccess the movie object and get data from it
// 4. update the class of the elements from display=none to display=block. 


// This file contains the js code for seeing how many views a user-specified subject has had on Wikipedia in a ten day period.

// Variables for popularity display elements by year
var popularity2019El = document.getElementById("popularity2019");
var popularity2020El = document.getElementById("popularity2020");
var popularity2021El = document.getElementById("popularity2021");
var popularity2022El = document.getElementById("popularity2022");
var popularity2023El = document.getElementById("popularity2023");

// Variables for adding up total views
var totalViews = 0;
var totalViews2019 = 0;
var totalViews2020 = 0;
var totalViews2021 = 0;
var totalViews2022 = 0;
var totalViews2023 = 0;


// Test variable for manipulation without using form input.
// var subject = "Gladiator";

// Live variable using form input.
var subject = userInput;
// console.log(subject);


// Replace spaces in subject with underscores
var subjectConverted = subject.replace(/\s/g, "_");
console.log(subjectConverted);


// API variables:
// Monthly article views from 01/01/2020 to 06/30/2023
var viewsURL = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2020010100/2023063000";

// Monthly article views for 2019
var viewsURL2019 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2019010100/2019123100";

// Monthly article views for 2020
var viewsURL2020 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2020010100/2020123100";

// Monthly article views for 2021
var viewsURL2021 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2021010100/2021123100";

// Monthly article views for 2022
var viewsURL2022 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2022010100/2022123100";

// Monthly article views for 2023
var viewsURL2023 = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia/all-access/user/" + subjectConverted + "/monthly/2023010100/2023063000";


// API fetch requests:
// fetch request from wikimedia 2020
fetch(viewsURL2019)
    .then(function (response) {
        return response.json();
    })
    .then(function (viewsData2019) {
        // Console for viewing full array data (developer tool only)
        console.log(viewsData2019);

        // For each item in the array, get the views value and add it to the totalViews variable to give the year total.
        for (i = 0; i < 12; i++) {
            totalViews2019 = totalViews2019 + viewsData2019.items[i].views;
        }

        // Display the total views for the year in the console
        console.log("Total Views 2019: " + totalViews2019);
        
    })


// fetch request from wikimedia 2020
fetch(viewsURL2020)
    .then(function (response) {
        return response.json();
    })
    .then(function (viewsData2020) {
        // Console for viewing full array data (developer tool only)
        console.log(viewsData2020);

        // For each item in the array, get the views value and add it to the totalViews variable to give the year total.
        for (i = 0; i < 12; i++) {
            totalViews2020 = totalViews2020 + viewsData2020.items[i].views;
            // console.log(totalViews);
        }

        // Display the total views for the year in the console
        console.log("Total Views 2020: " + totalViews2020);
        

    })

// fetch request from wikimedia 2021
fetch(viewsURL2021)
    .then(function (response) {
        return response.json();
    })
    .then(function (viewsData2021) {
        // Console for viewing full array data (developer tool only) 
        console.log(viewsData2021);

        // For each item in the array, get the views value and add it to the totalViews variable to give the year total.
        for (i = 0; i < 12; i++) {
            totalViews2021 = totalViews2021 + viewsData2021.items[i].views;

        }

        // Display the total views for the year in the console
        console.log("Total Views 2021: " + totalViews2021);
        

    })

// fetch request from wikimedia 2022
fetch(viewsURL2022)
    .then(function (response) {
        return response.json();
    })
    .then(function (viewsData2022) {
        // Console for viewing full array data (developer tool only) 
        console.log(viewsData2022);

        // For each item in the array, get the views value and add it to the totalViews variable to give the year total.
        for (i = 0; i < 12; i++) {
            totalViews2022 = totalViews2022 + viewsData2022.items[i].views;

        }
        // Display the total views for the year in the console
        console.log("Total Views 2022: " + totalViews2022);
        

    })

// fetch request from wikimedia 2023
fetch(viewsURL2023)
    .then(function (response) {
        return response.json();
    })
    .then(function (viewsData2023) {
        // Console for viewing full array data (developer tool only) 
        console.log(viewsData2023);

        // For each item in the array, get the views value and add it to the totalViews variable to give the year total.
        for (i = 0; i < 6; i++) {
            totalViews2023 = totalViews2023 + viewsData2023.items[i].views;

        }
        // Display the total views for the year in the console
        console.log("Total Views 2023: " + totalViews2023);
        
    })

    
    function populateElements() { 
    popularity2019El.textContent = "2019: " + totalViews2019;
    popularity2020El.textContent = "2020: " + totalViews2020;
    popularity2021El.textContent = "2021: " + totalViews2021;
    popularity2022El.textContent = "2022: " + totalViews2022;
    popularity2023El.textContent = "2023: " + totalViews2023;
    
    }

    setTimeout(populateElements, 1000) 
    // Populate Popularity HTML Elements with values
 



