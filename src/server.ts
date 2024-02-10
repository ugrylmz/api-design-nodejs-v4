import express from "express";
import router from "./router";
import morgan from "morgan";
import { createNewUser, loginUser } from "./handlers/user";
import { protect } from "./modules/auth";


const app = express();

const customLogger = (message) => (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${message}`);
    next();
}

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger('custom logger'));





app.use('/api', router)
app.post('/user', createNewUser);
app.post('/login', loginUser);

export default app;