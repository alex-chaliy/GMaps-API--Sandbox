"use strict";

let express = require("express");
let app = express();

app.use( express.static( __dirname + "/app") );

let port = 8080;
app.listen(port);

console.log("Server running on port " + port);