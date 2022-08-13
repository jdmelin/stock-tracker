const router = require('express').Router();
const stockController = require('../controllers/stock-controller');
const { checkAuth } = require('../middleware/auth');

router
  .route('/stocks')
  .post(stockController.create)
  .get(stockController.getAll);

router.route('/stocks/:stockId').post(stockController.createUserStock);

router.route('/my-stocks').get(checkAuth, stockController.getAllByUserId);

module.exports = router;
