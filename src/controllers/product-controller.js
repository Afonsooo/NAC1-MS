const mongoose = require('mongoose');
const repository = require('../repositories/product-repository')


exports.get = async(req, res, next)=> {
    const data = await repository.getProduct();
    res.status(200).send(data);
}

exports.post = async(req, res, next) =>{
    try{
        await  repository.create(req.body);
        res.status(201).send({message: "Criado com sucesso!"});
    }catch(erro){
        res.status(400).send({message: "erro ao cadastrar produto"});
    }
}

exports.update = function (req, res, next) {
    res.send({type: 'PUT'});
  };
  
  exports.delete = function (req, res, next) {
    res.send({type: 'DELETE'});
  };