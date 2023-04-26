const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

const giRoutes = require('./giController');
router.use(giRoutes);

const nogiRoutes = require('./nogiController');
router.use(nogiRoutes);

module.exports = router;