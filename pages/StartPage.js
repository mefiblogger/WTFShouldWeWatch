/*global require, module, console, __dirname */
/*jslint unparam: true, sloppy: true, vars: true */

var swig = require("swig");

module.exports = function () {
    var template = swig.compileFile(__dirname + '/../assets/templates/index.html');

    return { "content" : template() };
};