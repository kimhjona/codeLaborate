const Projects = require('./../models/ProjectModel');
const ProjectUsers = require('./../models/ProjectUserModel');

// create new project
const ProjectController = {
  create(req, res) {
    Projects.create({
      title: req.body.title,
      summary: req.body.summary,
    })
    .then((project) => {
      res.send({
        message: `New project, ${project}, created!`,
        view: 2,
      });
    });
  },

// update project
  update(req, res) {
    Projects.findOne({
      where: { title: req.body.title },
    })
    .then((project) => {
      project.update({
        // will the req body have updated info?
        // or just snippet to add to existing info?
        title: req.body.title,
        summary: req.body.summary,
      })
      .then((project2) => {
        res.send(`${project2.title} project updated: ${project2}`);
      });
    });
  },

// delete project
  delete(req, res) {
    Projects.findOne({
      where: { title: req.body.title },
    }).then((project) => {
      project.destroy()
      .then(() => {
        res.send('Project deleted');
      });
    });
  },
};

module.exports = ProjectController;
