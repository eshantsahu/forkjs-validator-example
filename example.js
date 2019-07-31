const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '5mb'}));

/**
 * Mount all the files inside routes directory with their respective names
 */
fs.readdirSync("./routes/").filter((e) => { return e.endsWith(".js") }).forEach(file => {
    let name = file.substring(0, file.length - 3);
    name = (name == "index") ? "" : name;
    app.use("/" + name, require("./routes/" + name))
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))