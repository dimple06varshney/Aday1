const express = require('express');
const router = express.Router();

router.get('/login', (req,res)=>{
    res.render('user',{username: 'Dimple', password: 'hello123'})
})
module.exports = router;