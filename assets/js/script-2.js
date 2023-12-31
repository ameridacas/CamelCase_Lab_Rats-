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

var searchText = document.getElementById("searchField");
var searchButton = document.getElementById("searchButton");

function addSearchEventListeners() {
  searchText.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("Enter key was pressed");
      console.log("Search text field:", searchText.value);
      // Call function to fetch movie data here
      fetchMovieData();
    }
  });

  searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Search button was clicked");
    console.log("Search text button:", searchText.value);
    // Call function to fetch movie data here
    fetchMovieData();
    console.log(fetchMovieData);
  });
}

addSearchEventListeners();


function fetchMovieData() {
  // Get the user input
  var userInput = searchText.value;

  // Function to capitalize words and make articles and conjunctions lowercase
  // Needed for Wikipedia API search since it is case sensitive
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
      localStorage.setItem("storedparsedMovieData", JSON.stringify(parsedMovieData));
      localStorage.setItem("storedcapitalizedInput", JSON.stringify(capitalizedInput));

      // Fetch similar movie titles from OMDB API
      fetch(`https://www.omdbapi.com/?s=${userInput}&apikey=${omdbApi}`)
        .then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error occurred during similar movie titles fetch request");
          }
        })
        .then(function (parsedSimilarMovieData) {
          if (parsedSimilarMovieData.Response === "True") {
            // If similar movies were found, display a list of their titles
            var similarMovies = parsedSimilarMovieData.Search.map(function (movie) {
              return movie.Title;
            });
            console.log("Similar Movies:", similarMovies);
            localStorage.setItem("similarMovies", JSON.stringify(similarMovies)); //stores the similar movies in local storage
          } else {
            // If no similar movies were found, display a message
            console.log("No similar movies found for:", capitalizedInput);
          }
        })
        .catch(function (error) {
          console.error("Error occurred during fetch request:", error);
        });
    })
    .catch(function (error) {
      console.error("Error occurred during fetch request:", error);
    });
}
// Above fetch request for possible autocomplete feature?

// fetchNovieData gets user input and fetches the movie data from the API
// it applies the capitalizeTitle function to the user input to lowercase articles and conjunctions.
// needed for the Wikipedia API search since it is case sensitive
// it then goes through the existing movie names in local storage and splits them into an array
// it then checks if the movie title was found (not "False" or "Movie not found!")
// if the movie is found, it adds it to the array and updates local storage
// if it does exist, it logs a message to the console
// if the movie was not found, it displays a message
// the title goes through the fetch request and is stored in local storage
// script-1.js finishes the rest of the js function and displays the movie data on the page

var checkStorage = localStorage.getItem("userInputOmbdMovieName");
console.log("Value of checkStorage:", checkStorage);

