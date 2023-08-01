var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://syammarolix:Syam%40987@cluster0.155kmm3.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};
