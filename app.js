/*global require, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var express = require("express"),
    request = require("request"),

    IMDbTop250 = require("./utils/IMDbTop250"),
    OMDB = require("./utils/OMDB"),

    StartPage = require("./pages/StartPage"),
    ErrorPage = require("./pages/ErrorPage"),
    MoviePage = require("./pages/MoviePage"),

    top250 = new IMDbTop250(),
    omdb = new OMDB(),
    title,
    page,

    app = express(),
    server;

// startpage
app.get('/', function (req, res) {
    console.log("[access] route:homepage from:%s", req.ip);
    res.send(new StartPage().content);
});

// movie reco page
app.get('/recommend-me-a-fucking-movie', function (req, res) {
    console.log("[access] route:reco from:%s", req.ip);

    title = top250.getRandomTitle();

    omdb.getMovieByTitle(title)
        .then(function (movie) {
            res.send(new MoviePage(movie).content);
        })
        .catch(function (error) {
            res.send(new ErrorPage(error).content);
        });
});

app.use('/images', express.static(__dirname + '/assets/images'));
app.use('/css', express.static(__dirname + '/assets/css'));

server = app.listen(process.argv[2] || 3000, function () {
    console.log("[app] start - port:%s", server.address().port);
})