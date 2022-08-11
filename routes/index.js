const router = require('express').Router();
const { checkAuth } = require('../middleware/auth');

router.get('/', checkAuth, (req, res) => {
  res.render('template', {
    partials: {
      partial: '/partials/home',
    },
  });
});

module.exports = router;
