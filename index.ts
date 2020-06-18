import * as express from 'express';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import Messenger from "./src/controllers/createMsg";

dotenv.config();

const app = express();
const PORT: number = 3000;
const db: string = `mongodb://localhost/typescript_node`;

let messages = new Messenger(PORT);

// mongoose connection
mongoose.connect(db, {
    useMongoClient: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(messages.messagePrint())
);
