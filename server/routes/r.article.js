const router = require('express').Router()

router.get('/', function(req, res) {
    res.send('Article routes succes')
})

module.exports = router