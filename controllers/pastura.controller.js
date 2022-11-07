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
    res.json(pastura);
    })
};

exports.pastura_details = function (req, res, next) {
    Pastura.findById(req.params.id, function (err, pastura) {
    if (err) return next(err);
        res.send({pastura});
    })
};

exports.pastura_all = function (req, res, next) {
    Pastura.find({}, function(err, pasturas) {
        var pasturaMap = [];
        pasturas.forEach(function(pastura) {    
        pasturaMap.push(pastura);
        });
        res.send({
            pasturaMap
        });
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

exports.pastura_findByIdAndUpdate = function (req, res, next) {
    let pastura = Pastura.findByIdAndUpdate(req.params.id , 
        {familia: req.body.familia,
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
            img: req.body.img} 
            ,function (err, pastu) {
        if (err) return next(err);
            res.send("Pastura Modificada con Éxito!!");
            }
        )   
};

exports.pastura_findByEspecieAndUpdate = function (req, res, next) {

    Pastura.findOne({especie: req.params.especie}, function(err, pastura){

        Pastura.findByIdAndUpdate(pastura._id , 
            {
                familia: req.body["Familia"],
                especie: req.body["Especie"],
                tipo_vegetativo: req.body["Tipo Vegetativo"],
                rizoma_engrozado: req.body["Rizoma engrozado"],
                macollo1: req.body["Macollo1"],
                macollo2: req.body["Macollo2"],
                consistecia_de_la_ligula: req.body["Consistecia de la ligula"],
                forma_de_la_ligula: req.body["Forma de la ligula"],
                tamanio: req.body["Tamaño"],
                otra_caracteristica_ligula: req.body["Otra caracteristica ligula"],
                color_de_la_ligula: req.body["Color de la ligula"],
                forma_de_la_lamina: req.body["Forma de la lamina"],
                canaliculada: req.body["Canaliculada"],
                tipo_de_lamina: req.body["Tipo de lamina"],
                apice: req.body["Apice"],
                nervadura_central_marcada: req.body["Nervadura central marcada"],
                observaciones: req.body["Observaciones"],
                pelos: req.body["Pelos"],
                ubicación_de_pelos: req.body["Ubicación de pelos"],
                observacion: req.body["Observación"],
                observaciones_generales: req.body["Observaciones generales"],
                ciclo_de_vida: req.body["Ciclo de vida"],
                ciclo_productivo: req.body["Ciclo productivo"],
                tipo_productivo: req.body["Tipo productivo"],
                tipo_de_campo: req.body["Tipo de campo"],
                img: req.body.img
            } 
                ,function (err, pastu) {
            if (err) return next(err);
                res.send("Pastura Modificada con Éxito!!");
                }
            )   
    })

    

};

exports.pastura_delete = async (req, res, next) => {
    try{
        const pastura = await Pastura.findById(req.params.id);
        await pastura.remove();
        //res.send({data: pastura});
        res.send("Pastura Eliminada con Éxito!!");
    } catch {
        res.status(400).send("Error!!");
    }
};

exports.pastura_All_Excel =  async (req, res, next) => {

    var registrosRepetidos = [];

    for(let i=0; i < req.body.length; i++) {
        

        let p = await Pastura.findOne({ especie: req.body[i].Especie});

            if(p == undefined){
                
                let pastura1 = new Pastura(
                    {
                        _id: new mongoose.Types.ObjectId(),
                        familia: req.body[i]["Familia"],
                        especie: req.body[i]["Especie"],
                        tipo_vegetativo: req.body[i]["Tipo Vegetativo"],
                        rizoma_engrozado: req.body[i]["Rizoma engrozado"],
                        macollo1: req.body[i]["Macollo1"],
                        macollo2: req.body[i]["Macollo2"],
                        consistecia_de_la_ligula: req.body[i]["Consistecia de la ligula"],
                        forma_de_la_ligula: req.body[i]["Forma de la ligula"],
                        tamanio: req.body[i]["Tamaño"],
                        otra_caracteristica_ligula: req.body[i]["Otra caracteristica ligula"],
                        color_de_la_ligula: req.body[i]["Color de la ligula"],
                        forma_de_la_lamina: req.body[i]["Forma de la lamina"],
                        canaliculada: req.body[i]["Canaliculada"],
                        tipo_de_lamina: req.body[i]["Tipo de lamina"],
                        apice: req.body[i]["Apice"],
                        nervadura_central_marcada: req.body[i]["Nervadura central marcada"],
                        observaciones: req.body[i]["Observaciones"],
                        pelos: req.body[i]["Pelos"],
                        ubicación_de_pelos: req.body[i]["Ubicación de pelos"],
                        observacion: req.body[i]["Observación"],
                        observaciones_generales: req.body[i]["Observaciones generales"],
                        ciclo_de_vida: req.body[i]["Ciclo de vida"],
                        ciclo_productivo: req.body[i]["Ciclo productivo"],
                        tipo_productivo: req.body[i]["Tipo productivo"],
                        tipo_de_campo: req.body[i]["Tipo de campo"]
                    }     
                );
                pastura1.save();
            }else{
                registrosRepetidos.push(req.body[i]);
            }
    }

    await res.json(
        registrosRepetidos
    );   
};
