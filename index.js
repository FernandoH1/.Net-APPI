
const express = require('express');
//const bodyParser = require('body-parser');

const pastura = require('./router/pastura.route'); // Importar las rutas de los productos

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/pastura', pastura);
//app.set('view engine', 'ejs');
let port = 1234;
app.listen(port, () => {
 console.log('Servidor arriba!');
});

var mongoose = require('mongoose');
var dev_db_url = "mongodb+srv://FernandoH1:root@cluster0.mnowd1f.mongodb.net/?retryWrites=true&w=majority";
var mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



