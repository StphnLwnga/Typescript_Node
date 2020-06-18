"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const createMsg_1 = require("./src/controllers/createMsg");
dotenv.config();
const app = express();
const PORT = 3000;
const db = `mongodb://localhost/typescript_node`;
let messages = new createMsg_1.default(PORT);
// mongoose connection
mongoose.connect(db, {
    useMongoClient: true,
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
crmRoutes_1.default(app);
// serving static files
app.use(express.static('public'));
app.listen(PORT, () => console.log(messages.messagePrint()));
