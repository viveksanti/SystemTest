import { Application } from 'express';
import * as express from 'express';
import * as session from 'express-session';
import passport from './passport'; 

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

export default app;
