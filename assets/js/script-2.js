//code for OMDB API
//Exo-MDR-CD2000

var omdbApi = '3a4b3de0';

// http://www.omdbapi.com/?apikey=3a4b3de0


// Send all data requests to:

// http://www.omdbapi.com/?apikey=[yourkey]&


// Poster API requests:

// http://img.omdbapi.com/?apikey=[yourkey]&

//parameters to use in the url

// t = title
// type = movie only for now
// y = year

// use %20 for the white space in the title


var userInput = prompt("Enter Movie Name Here:");
console.log("User typed:", userInput);


//TODO: write js code that will input %20 for the white space in titles with more than one word

// var encodedMovieTitle = userSearch.replace(/ /g, "%20");
//var omdbFull = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${omdbApi}&plot=full`;
var omdbFull = `https://www.omdbapi.com/?t=${userInput}&apikey=${omdbApi}&plot=full`;
console.log(omdbFull);

fetch(omdbFull)
  .then (function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error occurred during fetch request");
    }
  })
  .then (function(parsedMovieData) { //same as function(parsedMovieData)
    console.log("Fetched Movie Data:", parsedMovieData);
  })
  .catch(error => {
    console.error("Error occurred during fetch request:", error);
  });

// the above is the fully fetched data from the OMDB API. Must now implement the data into the HTML.


