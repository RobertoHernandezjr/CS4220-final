const express = require('express');
const router = express.Router();
const { getSearchHistory } = require('./searchLogic');

// GET /history
router.get('/', async (req, res) => {
    try {
        const { searchTerm } = req.query;

        const history = searchTerm ? await getSearchHistory(searchTerm) : await getSearchHistory();
        res.json(history);
    } catch (err) {
        //console.error(err);
        res.status(500).json(error.toString());
    }
});

module.exports = router;
