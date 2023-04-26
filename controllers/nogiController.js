const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/api/nogi', (req, res) => {
    fs.readFile('./db/nogi.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({msg: "Error reading db"});
        } else {
            const dataArr = JSON.parse(data);
            return res.json(dataArr);
        }
    })
});

router.post('/api/nogi', (req, res) => {
    fs.readFile('./db/nogi.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({msg: "Error reading db"});
        } else {
            const dataArr = JSON.parse(data);
            const newNogi = {
                brand: req.body.brand,
                color: req.body.color,
                article: req.body.article
            }
            console.log(newNogi);
            dataArr.push(newNogi);
            fs.writeFile('./db/nogi.json', JSON.stringify(dataArr, null, 4), err => {
                if (err) {
                    return res.status(500).json({msg: "Error writing db"});
                } else {
                    res.json(newNogi);
                }
            })
        }
    })
})





module.exports = router;