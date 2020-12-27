const createTable = `
  CREATE TABLE IF NOT EXISTS hostelfaculty(
    Faculty_ID varchar(9) PRIMARY KEY,
    Position varchar(255),
    Department varchar(255),
    h_phone_number varchar(10),
    h_email varchar(255),
    password varchar(20),
    FOREIGN KEY(Faculty_ID) references user(User_ID)
  );
`
const gethostelfacutlyFromHostelID = (Facutly_ID) => {
    return `
      SELECT * FROM hostelfacutly WHERE Faculty_ID=${Facutly_ID};
    `
  }
  

const
  insertIntoTable = (Faculty_ID, Position, Department, h_phone_number, h_email,password) => {
    return `
    INSERT INTO hostelfaculty VALUES ('${Faculty_ID}','${Position}','${Department}','${h_phone_number}','${h_email}','${password}')
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
