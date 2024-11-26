import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes';
import chalk from 'chalk';

const app = express();

app.use((req, res, next) => {
    console.log(chalk.yellow(`${req.method}`) + " " + chalk.blue(`${req.originalUrl}`));
    next();  // Passa para o próximo middleware ou rota
  });

app.use(cors());
app.use(bodyParser.json());
app.use('/api', eventRoutes);

export default app;
