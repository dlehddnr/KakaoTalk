import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mainRouter from './routers/mainRouter';
import userRouter from './routers/userRouter';
import chatRouter from './routers/chatRouter';
import routes from './routes';
import { localsMiddleware } from './Middlewares';

const app = express();

app.use(helmet());
app.set('view engine', 'pug');
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(localsMiddleware)

app.use(routes.home, mainRouter);
app.use(routes.chats, chatRouter);
app.use(routes.profile, userRouter);

export default app;