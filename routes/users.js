const router = require('express').Router();
const userController = require('../controllers/user-controller');

router.route('/users').post(userController.create).get(userController.getAll);

router
  .route('/users/:id')
  .get(userController.getOne)
  .put(userController.update)
  .delete(userController.deleteUser);

module.exports = router;
