var mongoose = require('mongoose');
const Pastura = require('../models/pastura.model');

exports.test = function (req, res) {
 res.send('Pastura Iniciada!');
};

exports.pastura_create = function (req, res, next) {
    let pastura = new Pastura(
    {
    _id: new mongoose.Types.ObjectId(),
    familia: req.body.familia,
    especie: req.body.especie,
    tipo_vegetativo: req.body.tipo_vegetativo,
    rizoma_engrozado: req.body.rizoma_engrozado,
    macollo1: req.body.macollo1,
    macollo2: req.body.macollo2,
    consistecia_de_la_ligula: req.body.consistecia_de_la_ligula,
    forma_de_la_ligula: req.body.forma_de_la_ligula,
    tamanio: req.body.tamanio,
    otra_caracteristica_ligula: req.body.otra_caracteristica_ligula,
    color_de_la_ligula: req.body.color_de_la_ligula,
    forma_de_la_lamina: req.body.forma_de_la_lamina,
    canaliculada: req.body.canaliculada,
    tipo_de_lamina: req.body.tipo_de_lamina,
    apice: req.body.apice,
    nervadura_central_marcada: req.body.nervadura_central_marcada,
    observaciones: req.body.observaciones,
    pelos: req.body.pelos,
    ubicación_de_pelos: req.body.ubicación_de_pelos,
    observacion: req.body.observacion,
    observaciones_generales: req.body.observaciones_generales,
    ciclo_de_vida: req.body.ciclo_de_vida,
    ciclo_productivo: req.body.ciclo_productivo,
    tipo_productivo: req.body.tipo_productivo,
    tipo_de_campo: req.body.tipo_de_campo,
    img: req.body.img,
    }
    );
    console.log(req.body);
    pastura.save(function (err) {
    if (err) {
    return next(err);
    }
    res.json({resultado: "Pastura Creada con Éxito!!"});
    })
};

exports.pastura_details = function (req, res, next) {
    Pastura.findById(req.params.id, function (err, pastura) {
    if (err) return next(err);
        res.send(pastura);
    })
};

exports.pastura_all = function (req, res, next) {
    Pastura.find({}, function(err, pasturas) {
        var pasturaMap = [];
        pasturas.forEach(function(pastura) {
        pasturaMap.push(pastura);
        });
        res.setHeader("X-Total-Count", pasturas.length);
        res.setHeader("Content-Range", "pasturas 0-20/" + pasturas.length);
        res.send(pasturaMap);
    })
};

exports.pastura_findG = function (req, res, next) {
    Pastura.find({ familia:req.params.familia }, function(err, pasturas) {
        var pasturaMap = [];
        pasturas.forEach(function(pastura) {
        pasturaMap.push(pastura);
        }); 
        res.send({
            pasturaMap: pasturaMap
        });
    })
};

exports.pastura_valores = function (req, res, next) {
    Pastura.collection.distinct( req.params.campo , function(error, results){
        res.json(results);
    });   
}

exports.pastura_findE = function (req, res, next) {
    var data = req.body;
    var data2 = {};

      Object.entries(data).forEach(([key, value]) => {

        if( `${value}` != "" ){
            data2[`${key}`] = `${value}`;
        }
      })
      

    Pastura.find( data2 , function(err, pasturas) {
        var pasturaMap = [];
        pasturas.forEach(function(pastura) {
        pasturaMap.push(pastura);
        }); 
        res.send({
            pasturaMap: pasturaMap
        });
    })
};
