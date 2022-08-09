const router = require('express').Router();
const stockController = require('../controllers/stock-controller');

router
  .route('/stocks')
  .post(stockController.create)
  .get(stockController.getAll);

router.route('/stocks/:userId/:stockId').post(stockController.createUserStock);

module.exports = router;
