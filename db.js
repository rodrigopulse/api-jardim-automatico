import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const host = process.env.DB_HOST
const usuario = process.env.DB_USUARIO
const senha = process.env.DB_SENHA
mongoose.connect(`mongodb+srv://${usuario}:${senha}@${host}`, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = { Mongoose: mongoose }