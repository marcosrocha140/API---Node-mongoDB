const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const { Schema } = mongoose;

const usersSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true,
        unique: true
    },

    password:{
        type: String,
        require: true
    },

    jogador:{
      type: Boolean,
      default: false
    },

    seuClube:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clubes",
      require: false
    }

}, {timestamps:true}
);


// Middleware para criar o hash da senha antes de salvar no banco
usersSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();  // Apenas faz o hash se a senha foi modificada
    try {
      const salt = await bcrypt.genSalt(10);  // Gera o salt
      this.password = await bcrypt.hash(this.password, salt);  // Aplica o hash
      next();
    } catch (error) {
      next(error);  // Passa o erro para o middleware de erro
    }
  });
  
  // Método para comparar a senha inserida com o hash armazenado no banco
  usersSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

const Users = new mongoose.model("Users", usersSchema);

module.exports = {
  Users,
  usersSchema
}