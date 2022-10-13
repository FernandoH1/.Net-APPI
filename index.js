const express = require('express');
const bodyParser = require('body-parser');

const pastura = require('./router/pastura.route'); // Importar las rutas de los productos

const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Express 3.0
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Expose-Headers', 'Content-Range');
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    next();
});

app.use('/pastura', pastura);
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



