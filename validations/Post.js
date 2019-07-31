var validator = require("../validator");

var methods = {};

methods.add = new validator.ForkMiddleware({
    name : validator.string().max(10).min(3),
    text : validator.string().required(),
    userId : validator.number().required()
});

methods.list = {
    userId : validator.number().required()
}


module.exports = methods;