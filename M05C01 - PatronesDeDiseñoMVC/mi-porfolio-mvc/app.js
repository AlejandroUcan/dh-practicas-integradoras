const express = require('express');
const app = express();
const mainRoutes = require('./routers/main');

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor funcionando');
});

app.use('/', mainRoutes);
