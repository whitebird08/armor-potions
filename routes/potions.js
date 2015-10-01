var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/armor')
var Potions = db.get('potions')

// router.get('/', function(req, res) {
//   res.status(200).json({ message: 'rawr! you did it!' });
// });
router.get('/', function(req, res) {
  Potions.find({}, function(err, potions) {
    if (err) {
      res.send(err);
    }
    res.status(200).json(potions);
  })
});


router.post('/', function(req, res){
  Potions.insert(req.body, function(err, potions){
    if (err){
      res.send(err);
    }
    res.status(201).json(potions);
  })
})

router.get('/:id', function(req, res){
  Potions.findOne({_id: req.params.id}, function(err, potions){
    if (err) {
      res.send(err)
    }
    res.status(200).json(potions)
  })
})

router.put('/:id', function(req, res){
  Potions.findAndModify({_id: req.params.id}, function (err, potions){
    if (err){
      throw err
    }
    res.jason(req.body)
  })
})

router.delete('/:id', function(req, res){
  Potions.remove({_id: req.params.id}, function(err, potions){
    if (err){
      throw err
    }
    res.status(202).json(potions)
  })
})


module.exports = router