import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();  

app.use(cors())
app.use(express.json());
app.use(routes);
// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: identificar um recurso dentro de nossa rota
// Query Params: Paginação, filtros, ordenação




app.listen(3333);

