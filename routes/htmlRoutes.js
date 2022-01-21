const router = require("express").Router();
const path = require("path");

//paths to send HTML files to the browser
//when a request is made to the server, the following files are served
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});




module.exports = router;