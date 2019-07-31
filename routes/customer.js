var app = require("@forkjs/group-router");
var PostController = require("../controllers/PostController");
var PostValidator = require("../validations/Post");
var validator = require("../validator");
/**
 * Module : Routes for Application
 * Author : Eshant Sahu
 * Date : 25th, Jul, 2019
 * Source : https://www.npmjs.com/package/@forkjs/group-router
 */
app.group("/posts", function () {

    app.post("/create", PostController.create, [PostValidator.add]);
    
    app.get("/list",  PostController.list);

});


module.exports = app.router;