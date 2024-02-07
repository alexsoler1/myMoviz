
var express = require('express');
var router = express.Router();


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=61b90ef0585eed9d3e86c5959483b0c1`)
        .then(response => response.json())
        .then(data => {
            res.json({ movies: data.results });
        });
});

module.exports = router;