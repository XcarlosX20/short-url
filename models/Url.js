const mongoose = require("mongoose");
const shortid = require("shortid");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    urlOriginal: {
        type: String,
        lowercarse: true,
        trim: true
    }, 
    urlShort : {
        type: String
    }
});
//method of mongosose
urlSchema.pre("save", async function(next){
    this.urlShort = shortid.generate();
    next();
});
module.exports = mongoose.model("Url", urlSchema);