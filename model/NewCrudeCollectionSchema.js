const mongoose = require('mongoose');

const NewCrudeCollectionSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Salary : Number,
    Designation : String,
    IsActive : Boolean,
    IsDelete : Boolean,
    LastActivityOn : {type:Date,default:Date.now},
},{collection:"NewCrudeCollection"});
module.exports = NewCrudeCollection = mongoose.model("NewCrudeCollection",NewCrudeCollectionSchema);