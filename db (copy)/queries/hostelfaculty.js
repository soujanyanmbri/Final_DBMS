const createTable = `
  CREATE TABLE IF NOT EXISTS hostelfaculty(
    Faculty_ID varchar(9) PRIMARY KEY,
    Position varchar(255),
    Department varchar(255),
    h_phone_number varchar(10),
    h_email varchar(255),
    FOREIGN KEY(Faculty_ID) references user(User_ID)
  );
`

const
  insertIntoTable = (Faculty_ID, Position, Department, h_phone_number, h_email) => {
    return `
    INSERT INTO warden VALUES ('${Faculty_ID}','${Position}','${Department}','${h_phone_number}','${h_email}')
    `
  }

const selectAll = `
  SELECT * FROM hostelfaculty;
`

const dropTable = `
  DROP TABLE IF EXISTS hostelfacutly;
`

module.exports = {
  createTable,
  insertIntoTable,
  selectAll,
  dropTable,
}
