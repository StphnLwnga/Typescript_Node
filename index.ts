import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import Messenger from "./src/controllers/createMsg";
import { Settings } from './settings';

dotenv.config();

const app = express();

let messages = new Messenger(Settings.PORT);

// mongoose connection
mongoose.connect(Settings.db, {
    useMongoClient: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.listen(Settings.PORT, () =>
    console.log(messages.messagePrint())
);
