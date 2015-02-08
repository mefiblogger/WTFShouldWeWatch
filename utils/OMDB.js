/*global require, module, console, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var request = require("request"),
    util = require("util"),
    Promise = require("Promise");

module.exports = function () {

    /**
     * Get movie data from OMDB by title.
     *
     * @param {String} title
     *
     * @returns {Promise}
     */
    var getMovieByTitle = function (title) {
        return new Promise(function (fulfill, reject){
            var requestOptions = {
                url: util.format("http://www.omdbapi.com/?t=%s&y=&plot=short&r=json", encodeURIComponent(title)),
                json: true
            };

            request(requestOptions, function (error, response, data) {
                if (error) {
                    reject(error);
                }

                if (200 != response.statusCode) {
                    reject(util.format("API error, statusCode: %s", response.statusCode));
                }

                if (data.Error) {
                    console.error("[error] %s, title was: %s", error, title);
                    reject(data.Error);
                }

                fulfill(data);
            });
        });
    };

    return {
        getMovieByTitle: getMovieByTitle
    };
};