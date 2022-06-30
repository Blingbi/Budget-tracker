const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    value:{
        type: Number,
        required:"Enter Value"
    },
    date:{
        type: Date,
        default: Date.now
    }
});
const Transcation = mongoose.model("Transaction",transSchema);

module.export = Transcation;