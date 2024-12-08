const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())


//importação do arquivo de conexão com o banco
const conn = require("./db/conn")
conn();

//Models
const Users = require("./models/Users");
const News = require("./models/News");
const Clubes = require("./models/Clubes");

const port = 3000

/*const Clube = mongoose.model("Clube",{
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
});*/


//Routes
const routes = require("./routes/router");

app.use("/", routes);

app.get("/", async(req, res) =>{
    const clubes = await Clubes.find()
    res.send(clubes)
});

app.post("/", async(req, res)=>{
    const clube = new Clubes({
        name: req.body.name,
        foundation: req.body.foundation,
        city: req.body.city,
        imageLogo: req.body.imageLogo
    })

    await clube.save()
    res.status(200).send(clube)
    res.send("Clube Cadatrado com sucesso!")
})

app.put("/:id", async(req, res) =>{
    const clube = await Clubes.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        foundation: req.body.foundation,
        city: req.body.city,
        imageLogo: req.body.imageLogo
    })

    return res.send(clube)
});

app.delete("/:id", async(req, res) =>{
    const clube = await Clubes.findByIdAndDelete(req.params.id)
    return res.send(clube);
})


//Metedo POST para o module dos usuarios
/*app.post("/users", async (req, res) => {
    try {
        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            jogador: req.body.jogador,
            seuClube: req.body.seuClube
        });
    
        await user.save();
        res.status(201).send("Usuário cadastrado com sucesso!");
    } catch (error) {
        res.send({error: error.mesage})
    }
});*/

//Metedo Get para os dados dos usuarios
/*app.get("/users", async(req, res) =>{
    
    try {
        const users = await Users.find().populate("seuClube");
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({error: error.mesage});
    }
})*/

//Metedo POST para o module de noticias
app.post("/news", async(req, res) =>{
    try {
        const news = new News({
            title: req.body.title,
            description: req.body.description,
            imageNews: req.body.imageNews,
            like: req.body.like
        });
        await news.save();
        res.send("Postagem feita com sucesso!");
    } catch (error) {
        res.send({error: error.mesage});
    }
})


app.listen(port, ()=>{
    console.log("Servidor rodando!")
})