// This file contains the js code for getting the song lyrcis from the Genius API

// **Draft function wrapper for getLyricsAPI function
// function getLyricsAPI() {move end bracket to the bottom when uncommented}

// placeholder lyrics URL variable
var lyricsURL = 'https://api.github.com/orgs/nodejs/repos';


// fetch request from Genius
fetch(lyricsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console log for viewing full api data
        console.log(data);
        // for loop and console log for viewing specific keys from the fetched data
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].license);
        }
    })

// **Draft code for get lyrics button
    // fetchLyricsButton.addEventListener('click', getLyricsAPI);