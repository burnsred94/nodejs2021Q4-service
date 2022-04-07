import express, { Express } from 'express'
import { PORT } from './common/config'
import { Server } from 'http'
import swaggerUI, { JsonObject } from 'swagger-ui-express';
import path from "path";
import YAML from 'yamljs';
import { userRouter } from './resources/users/user.router';
import { boardRouter } from './resources/board/board.router';
import { taskRouter } from './resources/tasks/tasks.router';


export class App {
    app: Express;
    server : Server;
    port : string | undefined;
    swaggerDocument: JsonObject ;
    constructor() {
      this.app = express();
      this.port = PORT;
      this.swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  };

    useRoutes(){
      this.app.use(express.json());
      this.app.use('/doc', swaggerUI.serve, swaggerUI.setup(this.swaggerDocument));
      this.app.use('/', (req, res, next) => {
        if (req.originalUrl === '/') {
          res.send('Service is running!');
          return;
        }
        next();
      });
      this.app.use('/users', userRouter);
      this.app.use('/boards', boardRouter);
      this.app.use('/boards/:boardId', taskRouter);
    }

    public async init(){
      this.useRoutes();
      this.server = this.app.listen(this.port);
      console.log(`App is running on http://localhost:${this.port}`);
    }
}