const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const TransactionsRoutes = require('./routes/transactions.routes');
const path = require('path');

// const verifyToken = require('./middlewares/auth.middlewares');
const PORT = process.env.PORT || 8080;

const app = express();
const bodyParser = require('body-parser');

// Gunakan middleware bodyParser untuk mengurai body permintaan
app.use(bodyParser.json());

app.use(express.json());
app.use(cookieParser());

// Tambahkan middleware untuk static files
app.use(express.static('public'));

// Atau jika ingin mengurai body berdasarkan URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(TransactionsRoutes);

// Tambahkan route untuk download
app.get('/download1', (req, res) => {
  const filePath = path.join(
    __dirname,
    'public/assets/inventory-ujikom-pelatihan.rar'
  );
  res.download(filePath);
});

app.get('/download2', (req, res) => {
  const filePath = path.join(__dirname, 'public/assets/project-ujikom.rar');
  res.download(filePath);
});

app.get('/downloadNode', (req, res) => {
  const filePath = path.join(__dirname, 'public/assets/node-v20.18.0-x64.msi');
  res.download(filePath);
});

// Update route home untuk menambahkan link download
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World</h1>
    <a href="/download1">Full Pelatihan</a>
    <br>
    <br>
    <a href="/download2">Starter Project</a>
    <br>
    <br>
    <a href="/downloadNode">Download Node JS</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
