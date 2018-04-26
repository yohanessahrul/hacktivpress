const router = require('express').Router()
const {
    all, create, update, deletes, findOne, findAuthor, findCategory
} = require('../controllers/c_article')

router.get('/all', all)
router.post('/create', create)
router.put('/update/:id', update)
router.delete('/deletes/:id', deletes)
// router.get('/findone/:id', findOne)
router.get('/findauthor/:id', findAuthor)
router.get('/findcategory/:category', findCategory)

module.exports = router