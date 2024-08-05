
import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import customerRouter from '../src/routers/CustomerRoutes';

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/customers/', customerRouter);

app.use( 
    (   req: Request, 
        res: Response, 
        next: NextFunction ) => {
    res.send('Hello!');
});

app.use(
    (   error: Error, 
        req: Request, 
        res: Response, 
        next: NextFunction ) => {
    res.status(500).send(error.message);
});

export default app;