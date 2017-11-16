var movies = require('./movies')

var arunsCopy = movies();

arunsCopy.favouriteMovie = "Kal ho na ho";
console.log("Aruns favourite movie is " + arunsCopy.favouriteMovie);