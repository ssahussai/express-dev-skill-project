var Devskill = require('../models/devskill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteDevskill
};

function index(req, res) {
    res.render('devskills/index', {
      devskills: Devskill.getAll(),
      time: req.time = new Date().toLocaleDateString()
    });
  };

  function show(req, res) {
    res.render('devskills/show', {
      devskill: Devskill.getOne(req.params.id),
      devskillNum: parseInt(req.params.id) + 1
    });
  };

  function newSkill(req, res) {
    res.render('devskills/new');
  };

  function create(req, res) {
    req.body.learned = 'Ongoing';
    Devskill.create(req.body);
    res.redirect('/devskills');
  }

  function deleteDevskill(req, res) {
    Devskill.deleteOne(req.params.id);
    res.redirect('/devskills');
  }