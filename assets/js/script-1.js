// This file contains the js code for getting the song lyrcis from the Genius API

// Variables for interacting with html elements (will need to add more once we get it working)
var song1Title = document.getElementById('placeholder1a');
var song1Artist = document.getElementById('placeholder1b');
var song1Lyrics = document.getElementById('placeholder1c');

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
        // for loop and console log for viewing specific keys from the fetched data (the below ".license" is a placeholder for now)
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].license);
        }
        // TO DO: set the text content of the html elements to the values pulled from the API (the user's top ten song titles, artists, and lyrics). watch video and review lessons. These are placeholders. We will need to add these for each song once we get this working.
        song1Title.textContent = data[i].something1;
        song1Artist.textContent = data[i].something2;
        song1Lyrics.textContent = data[i].something3;

    })

// **Draft code for get lyrics button
    // fetchLyricsButton.addEventListener('click', getLyricsAPI);