// Code for the song lyrics will goes here...

// variables 
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
