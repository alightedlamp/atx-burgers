const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) =>
  burger
    .join('burgers', 'restaurant')
    .then(data => res.render('index', { burgers: data }))
    .catch(err => res.status(503).send('Error'))
);

router.get('/api/:type', (req, res) =>
  burger
    .all(req.params.type)
    .then(data => res.render('index', { burgers: data }))
    .catch(err => res.status(503).send('Error'))
);
router.post('/api/:type', (req, res) =>
  burger
    .create(req.params.type, req.body)
    .then(data => res.json({ data }))
    .catch(err => res.status(503).send('Error'))
);

router.put('/api/:type/:id', function(req, res) {
  burger
    .update(req.params.type, req.body, req.params.id)
    .then(result => {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
    .catch(err => res.status(503).send('Error'));
});

module.exports = router;
