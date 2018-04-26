const Article = require('../models/m_article')

module.exports = {
    all: function (req, res) {
        Article.find(function(err, response) {
            if (err) {
                res.status(500).json({
                    msg: 'Tidak bisa menampilkan data artikel untuk saat ini'
                })
            } else {
                res.status(200).json({
                    msg: 'menampilkan semua data artikel',
                    data: response
                })
            }
        })
    },
    create: function (req, res) {
        let newArticle = new Article ({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            author: req.body.author
        })
        newArticle.save(function (err, response) {
            if (err) {
                res.status(500).json({
                    msg: 'Tidak bisa add article untuk saat ini'
                })
            } else {
                res.status(200).json({
                    msg: 'Berhasil input artikel',
                    data: response
                })
            }
        })
    },
    update: function (req, res) {
        Article.findOneAndUpdate({
            _id: req.params.id
        }, {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            author: req.body.author
        }, function(err, response) {
            if(err) {
                res.status(500).json({
                    msg: 'Tidak bisa update, internal server error'
                })
            } else {
                res.status(200).json({
                    msg: 'Data berhasil terupdate',
                    data: response
                })
            }
        })
    },
    deletes: function (req, res) {
        Article.remove({
            _id: req.params.id
        },function(err, response) {
            if(err) {
                res.status(500).json({
                    msg: 'Tidak bisa menghapus, internal server error'
                })
            } else {
                res.status(200).json({
                    msg: 'Data berhasil terhapus'
                })
            }
        })
    },
    findOne: function (req, res) {
        
    },
    findAuthor: function (req, res) {
        Article.find({
            author: req.params.id
        }, function(err, response) {
            if(err) {
                res.status(500).json({
                    msg: 'Tidak bisa mendapatkan data author, internal server error'
                })
            } else {
                res.status(200).json({
                    msg: 'Data berdasarkan author berhasil ditemukan',
                    data: response
                })
            }
        })
    },
    findCategory: function (req, res) {
        Article.find({
            category: req.params.category
        }, function(err, response) {
            if(err) {
                res.status(500).json({
                    msg: 'Tidak bisa mendapatkan data category, internal server error'
                })
            } else {
                res.status(200).json({
                    msg: 'Data berdasarkan category berhasil ditemukan',
                    data: response
                })
            }
        })
    },
}