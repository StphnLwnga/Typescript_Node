"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const createMsg_1 = require("./src/controllers/createMsg");
const settings_1 = require("./settings");
dotenv.config();
const app = express();
let messages = new createMsg_1.default(settings_1.Settings.PORT);
// mongoose connection
mongoose.connect(settings_1.Settings.db, {
    useMongoClient: true,
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
crmRoutes_1.default(app);
// serving static files
app.use(express.static('public'));
app.listen(settings_1.Settings.PORT, () => console.log(messages.messagePrint()));
