const mongoose = require('mongoose');

const DesignationSchema = new mongoose.Schema({
    Designation : String,
    IsActive : Boolean,
    IsDelete : Boolean,
    LastActivityOn : {type:Date,default:Date.now},
},{collection:"Designation"});
module.exports = DesignationData = mongoose.model("Designation",DesignationSchema);