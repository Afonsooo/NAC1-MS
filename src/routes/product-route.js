const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/product-controller')


router.get('/', controller.get);

router.post('/product',apiController.add);

router.put('/product/:id',apiController.update);

router.delete('/product/:id',apiController.delete);


module.exports = router;