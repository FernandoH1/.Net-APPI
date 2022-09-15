var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PasturaSchema = new Schema({
 _id: mongoose.Schema.Types.ObjectId,
 familia: { enum: ['GRAMÍNEAS'] },
 especie: {type: String},
 tipo_vegetativo: {
    enum: [
        'Cespitoso', 
        'Estolonifero', 
        'Rizomatozo', 
        'Estolonifero rizomatozo', 
        'Estolonifero rizomatiforme'
    ]
 },
 rizoma_engrozado: {
    enum: ['Si','No','-']
 },
 macollo1: {
    enum:[
        'Semi rollizo', 
        'Comprimido', 
        'Semi Rolliza', 
        'Rollizo', 
        'Semi Comprimido', 
        'Semi Rollizo o rollizo',
        'Muy Comprimido',
        '-' ,
        'Semi comprimido-Rollizo'
        ]
    },
 macollo2: {
    enum:[
        'Intravaginal', 
        'Extravaginal', 
        'Extravaginal principalmente', 
        'Intra o extra',
        '-',
        'Intravaginal o Extravaginal',
        'Extravaginal (Intra en gral)'
    ]
},
consistecia_de_la_ligula: {
    enum: [
        'Membranácea',
        'Disuelta en pelos',
        'Mixta',
        '-',
        'No visible'
    ]
},
forma_de_la_ligula: {
    enum: [
        'Truncada y dientada',
        'Truncada',
        'Aguda',
        'Redondeada',
        '-'
    ]
},
tamanio: {
    enum:[
        '-',
        'Chica',
        'Largos',
        'Muy chica',
        'Mas ancha que alta',
        'Muy aguda',
        'No visible',
        'Alta',
        'Corta',
        'Grande',
        'Visible'
    ]
},
otra_caracteristica_ligula: {type: String},
color_de_la_ligula: {
    enum: [
        'Cataño',
        'Blanca o castaño',
        'Castaño',
        'Castaña',
        'Castaño en hojas maduras',
        '-'
    ]
},
forma_de_la_lamina: {
    enum:[
        '-',
        'Linear',
        'Navicular',
        'Linear-Lanceolada',
        'Lanceolada',
        'Lanceolada',
        'Linear'
    ]
},
canaliculada: {
    enum:[
        'Canaliculada',
        'Acanalada',
        'Ligeramente canaliculada',
        '-'
    ]
},
tipo_de_lamina: {
    enum:[
        'Plana',
        'Navicular-Plegada',
        'Navicular',
        'Plegada',
        'Navicular a plana',
        '-',
        'Navicular',
        'Plegada',
        'Plegada o aveces plana'
    ]
},
apice: {
    enum:[
        '-',
        'Agudo',
        'Obtuso'
    ]
},
nervadura_central_marcada: {
    enum: ['Si','No','-']
},
observaciones: {type:String},
pelos: {
    enum: [
        'Glabra',
        'Glabra o Pubecente',
        'Pubecente,Pubescente',
        '-',
        'Glabra o Pubescente',
        'Poco a nada'  
    ]
},
ubicación_de_pelos: {type:String},
observacion: {type:String},
observaciones_generales: {type:String},
ciclo_de_vida: { enum: ['Perenne','Anual','-'] },
ciclo_productivo: { enum: ['Invernal','Estival','-'] },
tipo_productivo: { 
    enum: [
        'Tierno',
        'Duro',
        'Ordinario',
        'Tierno-Ordinario',
        'Tierno - Ordinario',
        'Ordinaria',
        'Ordinara',
        'Fino',
        'Tierno antes de emitir fruto',
        'Ordinario-Tierno',
        'Tierno-Fino',
        'Muy enano',
        'Ordinario a tierno',
        'Ordinario-Duro',
        '-'
    ] 
},
tipo_de_campo: {type:String}
 
});
// Exportar el modelo
module.exports = mongoose.model('Pastura', PasturaSchema);