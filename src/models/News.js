const mongoose = require("mongoose")

const { Schema } = mongoose;

const newsSchema = new Schema({
    title:{
        type: String,
        require
    },

    description:{
        type: String,
        require
    },

    imageNews:{
        type: String,
        require
    },

    like:{
        type: Number
    }
    }, 
    {timestamps:true}
    );

    const News = new mongoose.model("News", newsSchema); 

module.exports = News;