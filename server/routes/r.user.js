const router = require('express').Router()
const { register, all, deletes, signin } = require('../controllers/c_user')

router.get('/all', all)
router.post('/register', register)
router.delete('/deletes/:id', deletes)
router.post('/signin', signin)

module.exports = router