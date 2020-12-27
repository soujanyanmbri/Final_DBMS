const {Sequelize} = require('sequelize');
const dbConfig = require('../dbConfig');
const queries = require('../queries');

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
  operatorsAliases: 0
});

console.log('hi');

async function main() {
  await db.authenticate();
  await db.query(queries.hostel.createTable)
  await db.query(queries.student.createTable);
  await db.query(queries.application.createTable)

  await db.query(queries.rooms.createTable)
  await db.query(queries.wardens.createTable)
  await db.query(queries.inventory.createTable)
  await db.query(queries.fines.createTable)
  await db.query(queries.attendance.createTable)
  await db.query(queries.resident.createTable)

}

main().then(() => {
console.log("All tables created");
});