var express = require('express');
var router = express.Router();
router.get('/search',  (req,res)=>{ 
        res.status(200).send({id: 1, name: "Harry Potter", author: "J.K. Rowling"})
})
module.exports = router;