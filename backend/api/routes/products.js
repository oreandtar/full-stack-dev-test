const express = require('express')
const products = require('./db')
const router = express.Router()

router.get('/', (req, res, next) =>{
    res.status(200).json(products)
})

router.get('/:productId', (req, res, next) =>{
   const id = req.params.productId; 
   if(id === 'special'){
    res.status(200).json({
        message: 'you discovered a special ID',
        id
    })
   } else {
    res.status(200).json({
        message: 'you passed an ID'
    })
   }   
})

module.exports = router;