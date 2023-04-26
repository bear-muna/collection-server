const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/api/gi', (req, res) => {
    fs.readFile('./db/gi.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({msg: "Error reading db"})
        } else {
            const dataArr = JSON.parse(data);
            return res.json(dataArr);
        }
    })
});

router.post('/api/gi', (req, res) => {
    fs.readFile('./db/gi.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({msg: "Error reading db"});
        } else {
            const dataArr = JSON.parse(data);
            const newGi = {
                brand: req.body.brand,
                color: req.body.color,
                size: req.body.size
            }
            console.log(newGi);
            dataArr.push(newGi);
            fs.writeFile('./db/gi.json', JSON.stringify(dataArr, null, 4), (err) => {
                if (err) {
                    return res.status(500).json({msg: "Error writing db"});
                } else {
                    return res.json(newGi);
                }
            })
        }
    })
})

module.exports = router;