var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PasturaSchema = new Schema({
 _id: mongoose.Schema.Types.ObjectId,
 id: Number,
 familia: {type: String},
 especie: {type: String},
 tipo_vegetativo: {type: String},
 rizoma_engrozado: {type: String},
 macollo1: {type: String},
 macollo2: {type: String},
consistecia_de_la_ligula: {type: String},
forma_de_la_ligula: {type: String},
tamanio: {type: String},
otra_caracteristica_ligula: {type: String},
color_de_la_ligula: {type: String},
forma_de_la_lamina: {type: String},
canaliculada: {type: String},
tipo_de_lamina: {type: String},
apice: {type: String},
nervadura_central_marcada: {type: String},
observaciones: {type:String},
pelos: {type: String},
ubicación_de_pelos: {type:String},
observacion: {type:String},
observaciones_generales: {type:String},
ciclo_de_vida: {type: String},
ciclo_productivo: {type: String},
tipo_productivo: {type: String},
tipo_de_campo: {type:String},
img:{type:String},
});

// Exportar el modelo
module.exports = mongoose.model('Pastura', PasturaSchema);