const User = require('../models/m_user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


module.exports = {
    all: function (req, res) {
        User.find(function(err, response) {
            if (err) {
                res.status(500).json({
                    msg: 'Tidak bisa menampilkan data untuk saat ini'
                })
            } else {
                res.status(200).json({
                    msg: 'menampilkan semua data user',
                    data: response
                })
            }
        })
    },
    deletes: function (req, res) {
        User.remove({
            _id: req.params.id
        },function(err, response) {
            if(err) {
                res.status(500).json({
                    msg: 'Toidak bisa menghapus, internal server error'
                })
            } else {
                res.status(200).json({
                    msg: 'Data berhasil terhapus'
                })
            }
        })
    },
    register: function (req, res) {
        let hashPassword = bcrypt.hashSync(req.body.password, 8)
        
        var newUser = new User({
            username: req.body.username,
            password: hashPassword,
            fullname: req.body.fullname,
            email: req.body.email
        })
        
        newUser.save(function (err, response) {
            if (err) {
                res.status(500).json({
                    msg: 'Tidak bisa register untuk saat ini'
                })
            } else {
                res.status(200).json({
                    msg: 'masuk ke controller user = REGISTER',
                    data: response
                })
            }
        })
    },
    signin: function (req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, response1) {
            console.log('abis ngecek')
            if(err){
                console.log('masuk error')
                res.status(500).json({
                    // msg: 'Internal server error << << << < <<< < < '
                })
            } else {
                // console.log('gak error kok==============+>')
                if(response1) { // kalo gak ketemu
                    let statusCompare = bcrypt.compareSync(req.body.password, response1.password)
                    console.log(statusCompare)
                    if(statusCompare == true) {
                        console.log('Password cocok, masuk gan!')
                        let payload = {
                            username: response1.username,
                            email: response1.email,
                            fullname: response1.fullname
                        }
                        let token = jwt.sign(payload, process.env.SECRET)
                        res.status(200).json({
                            msg: 'Anda berhasil login',
                            data: response1,
                            token: token
                        })
                    } else {
                        res.status(400).json({
                            msg: 'Cek kembali username dan password anda !!!'
                        })
                    }
                } else {
                    res.status(400).json({
                        msg: 'Cek kembali username dan password anda !!!'
                    })
                }
            }

        })
    },
    
}