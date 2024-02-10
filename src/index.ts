import * as dotenv from 'dotenv';
dotenv.config();

import app from './server';



app.listen(7777, () => {
  console.log('Example app listening at http://localhost:7777');
});
