import express from 'express';
const router = express.Router();
const luzRouter = require('./modules/luz/luz.route');

// Rota para login e etc
router.use("/luz", luzRouter);

module.exports = router;
