const express = require('express');
const app = express();



// routes
app.use(require('./routes/index'));







const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando puerto ${port} ...`))