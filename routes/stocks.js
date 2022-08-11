const router = require('express').Router();
const stockController = require('../controllers/stock-controller');
const { checkAuth } = require('../middleware/auth');

router
  .route('/stocks')
  .post(stockController.create)
  .get(checkAuth, stockController.getAll);

router.route('/stocks/:userId/:stockId').post(stockController.createUserStock);

module.exports = router;
