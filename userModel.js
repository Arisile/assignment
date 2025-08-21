const mongoose = require("mongoose")
const {Schema, model}  = mongoose;

const Mod = new Schema({
    user_id: {
        type: Schema.Types.String,
        required:true,
        unique: true,
        lowercase: true,
    },
    username:{
       type:String,
        required:true,
        unique: true,
        lowercase:true,
    },
    firstname: {
        type:String,
        required:true,
        unique: true,
    },
    lastname:{
        type:String,
        required:true,
        unique: true,
    },
        phone_number : {
        type:String,
        default:""
    },
    email : {
        type:String,
        unique:true,
        required:false
    },
    password:{
        type:String,
        required:false
    },

    timestamp:Date
})


const exportation = {
    Mod: model( "Mod", Mod),
};

module.exports = exportation;