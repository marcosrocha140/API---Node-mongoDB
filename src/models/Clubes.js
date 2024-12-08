const mongoose = require("mongoose")

const { Schema } = mongoose;

const clubesSchema = new Schema({
    name:{
        type: String,
        require
    },
    foundation:{
        type: Date,
        require
    },

    city:{
        type: String,
        require
    },

    imageLogo:{
        type: String,
        require
    }

}, {timestamps:true}
);


const Clubes = new mongoose.model("Clubes", clubesSchema);

module.exports = Clubes;