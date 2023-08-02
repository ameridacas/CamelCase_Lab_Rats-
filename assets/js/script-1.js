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

// Send popularity data to HTML
popularity2019El.textContent = "";
popularity2020El.textContent = "";
popularity2021El.textContent = "";
popularity2022El.textContent = "";
popularity2023El.textContent = "";

// Variables for movie info display elements
// var titleEl = document.getElementById("title");
// var releaseDateEl = document.getElementById("releaseDate");
// var actorsEl = document.getElementById("TBD");
// var directorEl = document.getElementById("TBD");
// var plotEl = document.getElementById("TBD");
// var boxOfficeEl = document.getElementById("TBD");
// var runtimeEl = document.getElementById("TBD");
// var genreEl = document.getElementById("genre");
// var posterEl = document.getElementById("poster");

// Variables for adding up total views
var totalViews = 0;
var totalViews2019 = 0;
var totalViews2020 = 0;
var totalViews2021 = 0;
var totalViews2022 = 0;
var totalViews2023 = 0;


function retrieveData() {

    
    var subject = JSON.parse(localStorage.getItem("storedcapitalizedInput"));

    // Test variable for manipulation without using form input.
    // var subject = "Gladiator";

    // Live variable using form input.
    // console.log(searchText.value);
    // var subject = capitalizedInput;
    // console.log(subject);

    console.log(subject);
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
    }

    function populateElements() {

        var parsedMovieDataObject = JSON.parse(localStorage.getItem("storedparsedMovieData"));
        
        // Add commas to popularity numbers
        var totalViews2019Format = totalViews2019.toLocaleString("en-US");
        var totalViews2020Format = totalViews2020.toLocaleString("en-US");
        var totalViews2021Format = totalViews2021.toLocaleString("en-US");
        var totalViews2022Format = totalViews2022.toLocaleString("en-US");
        var totalViews2023Format = totalViews2023.toLocaleString("en-US");

        // Send popularity data to HTML
        popularity2019El.textContent = "2019:\xa0\xa0" + totalViews2019Format;
        popularity2020El.textContent = "2020:\xa0\xa0" + totalViews2020Format;
        popularity2021El.textContent = "2021:\xa0\xa0" + totalViews2021Format;
        popularity2022El.textContent = "2022:\xa0\xa0" + totalViews2022Format;
        popularity2023El.textContent = "2023:\xa0\xa0" + totalViews2023Format;

        // Send movie data to HTML
        // titleEl.textContent = parsedMovieDataObject.Title;
        // releaseDateEl.textContent = parsedMovieDataObject.Released;
        // actorsEl.textContent = parsedMovieDataObject.Actors;
        // directorEl.textContent = parsedMovieDataObject.Director;
        // plotEl.textContent = parsedMovieDataObject.Plot;
        // boxOfficeEl.textContent = parsedMovieDataObject.BoxOffice;
        // runtimeEl.textContent = parsedMovieDataObject.Runtime;
        // genreEl.textContent = parsedMovieDataObject.Genre;
        // posterEl.setAttribute("src", parsedMovieDataObject.Poster)

        // Send movie data to console

        console.log(parsedMovieDataObject);
        console.log(parsedMovieDataObject.Title);
        console.log(parsedMovieDataObject.Released);
        console.log(parsedMovieDataObject.Actors);
        console.log(parsedMovieDataObject.Director);
        console.log(parsedMovieDataObject.Plot);
        console.log(parsedMovieDataObject.BoxOffice);
        console.log(parsedMovieDataObject.Runtime);
        console.log(parsedMovieDataObject.Genre);
        console.log(parsedMovieDataObject.Poster);



    }

searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    retrieveData()
    // Insert delay to allow all APIs to respond
    setTimeout(populateElements, 1000)
});






