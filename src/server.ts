import dotenv from 'dotenv';
dotenv.config();

const sPORT = `${process.env.PORT} || 3001` ;
const PORT = parseInt(sPORT);

import app from './app';
app.listen( PORT, () => console.log(`Server is running at ${PORT}`));
