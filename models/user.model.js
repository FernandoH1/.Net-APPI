var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
 _id: mongoose.Schema.Types.ObjectId,
 name: {type: String, required: true, max: 200, 
    validate: [
        function(name){
            return name.toString().length <= 200;   
        },
        'El Nombre no puede superar los 200 caracteres',
        ]
 },
 email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    match: /.+\@.+\..+/,
  },
  img:{type:String},
});

module.exports = mongoose.model('User', UserSchema);