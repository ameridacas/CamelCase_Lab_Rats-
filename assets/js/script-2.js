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

// Get the existing movie names from localStorage and split them into an array
var existingInput = localStorage.getItem("userInputOmbdMovieName");
var existingInputArray = existingInput ? JSON.parse(existingInput) : [];

// Check if the user's movie search already exists in the array
if (!existingInputArray.includes(userInput)) {
  // If it doesn't exist, add it to the array and update localStorage
  existingInputArray.push(userInput);
  localStorage.setItem("userInputOmbdMovieName", JSON.stringify(existingInputArray));
  console.log("User Input Storage:", existingInputArray);
} else {
  // If it does exist, log a message to the console
  console.log("Movie already exists in storage:", userInput);
}

// So Rick, use userInputOmbdMovieName and getItem to get the value of the user's movie search. User searches should stack in the local storage.
//also accounts for movie being typed in twice. If it is, it will not be added to the array.

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


