"use strict";

const express = require("express");
const app = express();

const path = require("path");

/*
 **require Routes
 */
//const routeDashboard = require("../routes/routeDashboard.js")
//const routeTemp = require("../routes/routeTemp.js")
//const routeUser = require("../routes/routeUser.js")

const errorMiddleware = require("./middleware/error");

//const cors = require('cors');
/*
 ** For development
 */

// let corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200
//   }
// app.use(cors(corsOptions));

/*
 ** serves all the static files in the /public directory in the project root
 */
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//app.use('/status/', routeDashboard)
//app.use('/temp/', routeTemp);
//app.use('/user/', routeUser);

app.use(errorMiddleware.handler);
module.exports = app;
