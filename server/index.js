import Koa from 'koa';
import config from './config';
import { configurePublic } from './src/controllers';
import './src/models';

const app = new Koa();

app.use(configurePublic());

app.listen(config.port);