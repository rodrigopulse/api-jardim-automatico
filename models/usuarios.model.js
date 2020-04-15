import mongoose from 'mongoose';

var UsuariosSchema = new mongoose.Schema({
  nome: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: String
}, { versionKey: false, collection: 'usuarios' })

var Usuarios = mongoose.model('Usuarios', UsuariosSchema);

module.exports = Usuarios;
/*
var usuarios = [
  {id: 1, name: "John", email: "john@mail.com", password: "john123"},
  {id: 2, name: "Sarah", email: "sarah@mail.com", password: "sarah123"}
  ];
module.exports = usuarios;*/