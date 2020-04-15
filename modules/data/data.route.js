import express from 'express';
import cors from 'cors';
const router = express.Router();
const dataController = require('./data.controller');

// Rota para fazer login
router.get('/dataAtual', cors(), dataController.dataAtual);

module.exports = router;
