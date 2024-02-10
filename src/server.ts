import express from "express";
import router from "./router";
import morgan from "morgan";


const app = express();

const customLogger = (message) => (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${message}`);
    next();
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger('custom logger'));


app.use("/",(req, res, next) => {
    next();
    res.status(401).send('not authorized');
});

app.use('/api', router)

export default app;