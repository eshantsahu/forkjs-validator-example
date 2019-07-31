var app = require("@forkjs/group-router");
var UserController = require("../controllers/UserController");

/**
 * Module : Routes for Application
 * Author : Eshant Sahu
 * Date : 25th, Jul, 2019
 * Source : https://www.npmjs.com/package/@forkjs/group-router
 */
app.group("/users", function () {

    app.post("/create", (req,res) => {
        res.send("Called users/create");
    });
    app.get("/hello",  (req, res) => {
        return res.send("hello !! there..");
    });
    app.get("/list",  UserController.list);

});


module.exports = app.router;