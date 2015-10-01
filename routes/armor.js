var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/armor')
var Armor = db.get('armor')

// router.get('/', function(req, res) {
//   res.status(200).json({ message: 'rawr! you did it!' });
// });
router.get('/', function(req, res) {
  Armor.find({}, function(err, armor) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(armor);
  })
});

// routes/armor.js

router.post('/', function(req, res) {
  Armor.insert(req.body, function(err, armor) {
    if (err) {
      res.send(err);
    }
    res.status(201).json(armor);
  });
})

router.get('/:id', function(req, res) {
  Armor.findOne({_id: req.params.id}, function(err, armor) {
    if (err) {
      res.send(err)
    }
    res.status(200).json(armor)
  })
})

router.put('/:id', function(req, res) {
  Armor.findAndModify({_id: req.params.id}, req.body, function(err, armor) {
    if (err) {
      throw err
    }
    res.json(req.body)
  })
})

router.delete('/:id', function(req, res) {
  Armor.remove({_id: req.params.id}, req.body, function(err, armor) {
    if (err) {
      throw err
    }
    res.status(202).json(armor)
  })
})

module.exports = router