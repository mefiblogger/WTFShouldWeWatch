/*global require, module, console, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var swig = require("swig");

module.exports = function (movie) {
    var template = swig.compileFile(__dirname + '/../assets/templates/movie.html');

    if ("N/A" === movie.Poster) {
        movie.Poster = "/images/no_poster.jpg";
    }

    if ("N/A" === movie.Plot) {
        movie.Plot = "No fucking plot here."
    }

    movie.imdbRating = ("N/A" === movie.imdbRating ? "no fucking rating" : movie.imdbRating + "/10");

    return { "content" : template({ movie : movie}) };
};