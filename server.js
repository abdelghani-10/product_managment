const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const productsRoutes = require('./routes/products');

const app = express();

connectDB();

app.use(bodyParser.json());
app.use('/api/products', productsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
