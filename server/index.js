import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';

import config from './config';
import { configurePublic } from './src/controllers';
import './src/models';
 
const app = new Koa();

app.use(cors());

app.use(bodyParser()); 

app.use(configurePublic());

app.listen(config.port);
