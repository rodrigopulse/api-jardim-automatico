import express from 'express';
import cors from 'cors';
const router = express.Router();
const luzController = require('./luz.controller');

// Rota para fazer login
router.get('/status', cors(), luzController.luzStatus);

module.exports = router;
