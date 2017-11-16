var movies = require('./movies')

var sinnisCopy = movies();

sinnisCopy.favouriteMovie = "Kabhi khushi kabhi gham";
console.log("Sinnis favourite movie is " + sinnisCopy.favouriteMovie);