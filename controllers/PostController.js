/**
 * Module : PostController
 * Author : Eshant Sahu
 * Date : 27th, Jul, 2019
 */

var methods = {};
var PostValidator = require("../validations/Post");
var validator = require("../validator");

/**
 * List Post of customers
 */
methods.list = (req, res) => {

    var validationResult = validator.validate(PostValidator.list, req.query);
    if(!validationResult.status)
        return res.send(validationResult);

    let list = [{id: 1, text: "I liked the product"}, {id: 2, name:"I want to buy more products"}];
    return res.send(list);

}

methods.create = (req, res) => {
    return res.send("Called create Posts.");
}
module.exports = methods;