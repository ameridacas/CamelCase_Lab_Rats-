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

// Function to capitalize words and make articles and conjunctions lowercase
function capitalizeTitle(title) {
  var lowercaseWords = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of'];
  var words = title.toLowerCase().split(' ');
  for (var i = 0; i < words.length; i++) {
    if (i === 0 || !lowercaseWords.includes(words[i])) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
  }
  return words.join(' ');
}

// Capitalize the user's movie search and store it in a variable
var capitalizedInput = capitalizeTitle(userInput);

// Get the existing movie names from localStorage and split them into an array
var existingInput = localStorage.getItem("userInputOmbdMovieName");
var existingInputArray = existingInput ? JSON.parse(existingInput) : [];

// Function to check if the movie title was found (not "False" or "Movie not found!")
function isMovieFound(movieData) {
  return movieData.Response === "True";
}

// Fetch movie data from OMDB API
fetch(`https://www.omdbapi.com/?t=${userInput}&apikey=${omdbApi}&plot=full`)
  .then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Error occurred during movie info fetch request");
    }
  })
  .then(function (parsedMovieData) {
    if (isMovieFound(parsedMovieData)) {
      // If the movie is found, add it to the array and update localStorage
      if (!existingInputArray.includes(capitalizedInput)) {
        existingInputArray.push(capitalizedInput);
        localStorage.setItem("userInputOmbdMovieName", JSON.stringify(existingInputArray));
        console.log("User Input Storage:", existingInputArray);
      } else {
        // If it does exist, log a message to the console
        console.log("Movie already exists in storage:", capitalizedInput);
      }
    } else {
      // If the movie was not found, display a message
      console.log("Movie not found:", capitalizedInput);
    }
    console.log("Fetched Movie Data:", parsedMovieData);
  })
  .catch(function (error) {
    console.error("Error occurred during fetch request:", error);
  });



  //grabs the poster
  fetch(`https://img.omdbapi.com/?apikey=${omdbApi}&`)