const User = require('../models/m_user')

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
        var newUser = new User({
            username: req.body.username,
            password: req.body.password,
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
            email: req.params.id
        }, function(err, response1) {
            res.status(200).json({
                msg: 'Email ada nih!'
            })
        })
    },
}