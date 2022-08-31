'use strict'

const express = require('express');
const product = require('../models/product');

const router = new express.Router();

//endpoint 
router.get('/', (req, res, next) => {
    res.status(200).send({
        "nome" :"Gabriel Afonso"
    });
});

router.post('/save', function(req, res) {
    var newProduct = new product();
    newProduct.title = req.title;
    newProduct.description = req.description;
    newProduct.price = req.price;
    newProduct.active = req.active;

    newProduct.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });

    router.post('/delete', function(req, res) {
        product.findByIdAndDelete((req.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });

    router.post('/update', function(req, res) {
        product.findByIdAndUpdate(req.id,
             {title: req.title, description: req.description, price: req.price, active: req.active}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });


module.exports = router;