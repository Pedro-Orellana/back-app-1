var express = require('express');
var router = express.Router();

const Item = require('../models/items')

/* GET home page. */
router.get('/', function (req, res, next) {
    Item
        .find()
        .lean()
        .exec((err, data) => {
            if (err) {
                res.send('error')
            } else {
                res.json(data)
            }
        })
        })

    router.post('/', (req, res) => {
        var item = new Item({
            itemText: req.body.text
        })


        item.save((err, data) => {
            if (err) {
                console.log(err)
                res.send("error")
            } else {
                console.log("save success")
                res.send(data)
            }
        })
    })

    module.exports = router;
