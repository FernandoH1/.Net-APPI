var mongoose = require('mongoose');
const User = require('../models/user.model');
exports.test = function (req, res) {
 res.send('Hola Usuario');
};

exports.user_create = function (req, res, next) {
    let user = new User(
    {
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    country: req.body.country,
    phone: req.body.phone,
    ci: req.body.ci,
    email: req.body.email,
    sex: req.body.sex,
    }
    );
    user.save(function (err) {
    if (err) {
    return next(err);
    }
    res.send("Usuario Creado con Éxito!!");
    })
};

exports.user_details = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
        res.send(user);
    })
};

exports.user_all = function (req, res, next) {
    User.find({}, function(err, users) {
        var userMap = [];
    
        users.forEach(function(user) {
        //userMap[user._id] = user;
        userMap.push(user);
        });
    
        //res.send(userMap); 
        res.send({
            userMap: userMap
        });
    })
};

exports.user_email = function(req,res,next){
    User.findOne({email: req.params.email}, function(err, user){res.json(user);})
}

