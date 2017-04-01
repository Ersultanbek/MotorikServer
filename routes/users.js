var express = require('express');
var router = express.Router();
var async = require('async');





/* GET users listing. */
router.get('/', function(req, res, next) {
        res.render('users', {});
});

module.exports = router;
