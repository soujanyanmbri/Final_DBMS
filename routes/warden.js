const express = require('express')
const route = express.Router();
const db = require('../db/models').db;
const hostelfacutlyQueries = require('../db/queries/hostelfacutly');
const utils = require('../utils');

const {User} = require('../db/models').models

route.post('/authorize', function (req, res) {
  db.query(hostelfacutlyQueries.gethostelfacutly(req.body.Faculty_ID, req.body.password)).then((data) => {
    if (data[0].length === 0) {
      return res.send({
        success: false,
        error: "No hostelfacutly with this username and password"
      })
    }
    return res.send({
      success: true,
      data: data[0]
    })
  }).catch(utils.errorFunction(req, res));
})

route.post('/add', function (req, res) {
  db.query(hostelfacutlyQueries.insertIntoTable(req.body.Faculty_ID, req.body.Position, req.body.Department, req.body.h_phone_number, req.body.h_email, req.body.password)).then((data) => {
    res.send({
      success: true
    });
  }).catch(utils.errorFunction(req, res));
})

route.get('/gethostelfacutly', (req, res) => {
  db.query(hostelfacutlyQueries.gethostelfacutlyFromHostelID(req.body.hid)).then((data) => {
    res.send({
      success: true,
      data: data[0]
    });
  }).catch(utils.errorFunction(req, res));
})

route.post('/update', function (req, res) {
  if (!req.user) {
    return res.status(401).send({
      success: false,
      error: "Unauthorized"
    })
  }
  db.query(studentQueries.updateStudent(req.user.dataValues.username, req.body)).then((data) => {
    if (req.user.dataValues.username === req.body.rollno) {
      return res.send({
        success: true
      })
    }
    User.update({
      username: req.body.rollno
    }, {
      where: {
        username: req.user.dataValues.username
      }
    }).then(() => {
      res.send({
        success: true
      });
    }).catch((err) => {
      console.log("Error")
      res.status(500).send(
        `Error in updating user
      ${err.message}
      `
      )
    })
  }).catch(utils.errorFunction(req, res));
})

route.get('/mydetails', (req, res) => {
  if (!req.user) {
    console.log("No User")
    return res.send({
      success: false,
      error: "No User"
    })
  }
  db.query(studentQueries.getDetails(req.user.dataValues.username)).then((data) => {
    res.send({
      success: true,
      data: data[0][0]
    })
  }).catch(utils.errorFunction(req, res))
})

route.get('/viewAll', (req, res) => {
  db.query(studentQueries.selectAll).then((students) => {
    res.send({
      success: true,
      data: students[0]
    })
  }).catch(utils.errorFunction(req, res));
})


module.exports = route;
