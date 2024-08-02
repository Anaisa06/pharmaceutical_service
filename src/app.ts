import express from 'express';
import { routes } from './Router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log('App running in port ', PORT);
});