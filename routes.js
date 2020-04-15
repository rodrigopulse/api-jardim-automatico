import express from 'express';
const router = express.Router();
//const plantasRouter = require('./modules/plantas/plantas.route');
const dataRouter = require('./modules/data/data.route');

// Rota para login e etc
router.use("/data", dataRouter);

module.exports = router;
