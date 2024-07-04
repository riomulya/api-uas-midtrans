const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const TransactionsRoutes = require('./routes/transactions.routes');

// const verifyToken = require('./middlewares/auth.middlewares');
const PORT = process.env.PORT || 8080;

const app = express();
const bodyParser = require('body-parser');

// Gunakan middleware bodyParser untuk mengurai body permintaan
app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser());

// Atau jika ingin mengurai body berdasarkan URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(TransactionsRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
