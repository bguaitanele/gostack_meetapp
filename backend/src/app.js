import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './database';
import { resolve } from 'path';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(this.headers);
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  headers(req, res, next) {
    res.setHeader('Access-Control-Expose-Headers', 'X-TOTAL-COUNT');
    next();
  }
}

export default new App().server;
