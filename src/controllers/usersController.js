const { Users: UsersModel } = require("../models/Users");

const usersController = {
    create: async(req, res) =>{
        try {
            const users ={
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                jogador: req.body.jogador,
                seuClube: req.body.seuClube
            };

            const response = await UsersModel.create(users);

            res.status(201).json({response, msg: "Usuario Cadastrado com sucesso"});
        } catch (error) {
            console.log(`Erro na criação: ${error}`);
        }
    },

    getAll: async(req, res) =>{
        try {
            const users = await UsersModel.find().populate("seuClube");
            res.json(users);
        } catch (error) {
            console.log(`Erro na requisição: ${error}`)
        }
    }
}

module.exports = usersController;