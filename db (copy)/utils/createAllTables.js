const db = require('./../models').db;
const queries = require('../queries');


db.query(queries.student.createTable).then((data) => {
  db.query(queries.parent.createTable).then((data) => {
      db.query(queries.hostelfaculty.createTable).then((data) => {
          db.query(queries.rooms.createTable).then((data) => {
              db.query(queries.hostel.createTable).then(() => {
                  db.query(queries.room.createTable).then((data) => {
                      db.query(queries.furniture.createTable).then((data) => {
                          db.query(queries.permissions.createTable).then((data) => {
                              db.query(queries.approve.createTable).then((data) => {
                                  console.log("All tables created");
                                  process.exit();
                              })
                          })
                      })
                  })
              })
          })
      })
  })
});
