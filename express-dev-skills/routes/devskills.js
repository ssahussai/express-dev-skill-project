var express = require('express');
var router = express.Router();
var devskillCtrl = require('../controllers/devskills');

/* GET devskill listing. */
router.get('/', devskillCtrl.index);

/* GET devskill/id. */
router.get('/:id', devskillCtrl.show);

module.exports = router;

