var express = require('express');
var router = express.Router();
var devskillCtrl = require('../controllers/devskills');

router.get('/', devskillCtrl.index); /* GET devskill listing */
router.get('/new', devskillCtrl.new); /* add new dev skill */
router.get('/:id', devskillCtrl.show); /* GET devskill/id. */
router.post('/', devskillCtrl.create); 
router.delete('/:id', devskillCtrl.delete);


module.exports = router;

