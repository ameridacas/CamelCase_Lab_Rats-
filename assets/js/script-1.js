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
        console.log(data)
    })

// **Draft code for get lyrics button
    // fetchLyricsButton.addEventListener('click', getLyricsAPI);