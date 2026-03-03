const express = require('express');
const app = express();
const PORT = 3000;

// middleware imports
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

// routes imports
const categoriasRouter = require('./routes/categorias');

app.use(express.json());

app.use(logger);


app.use('/api/categorias', categoriasRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor rodado na porta ${PORT}`);
});
