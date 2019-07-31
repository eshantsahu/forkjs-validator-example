/**
 * Module : UserController
 * Author : Eshant Sahu
 * Date : 25th, Jul, 2019
 */

var methods = {};

/**
 * List Users
 */
methods.list = (req, res) => {

    let list = [{id: 1, name: "Eshant"}, {id: 2, name:"Tom"}];
    return res.send(list);

}

module.exports = methods;