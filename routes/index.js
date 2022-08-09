const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('template', {
    partials: {
      partial: '/partials/home',
    },
  });
});

module.exports = router;
