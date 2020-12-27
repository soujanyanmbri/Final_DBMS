const createTable = `
  CREATE TABLE IF NOT EXISTS permissions(
    Permission_ID SERIAL UNIQUE PRIMARY KEY,
    Student_Roll_No varchar(9) NOT NULL,
    Initiation_Date date check(Initiation_Date>'2000-01-01' AND Initiation_Date <= now()),
    Priority varchar(255),
    OTP_Entered boolean DEFAULT '1',
    No_of_days int, 
    Description varchar(255) NOT NULL, 
    Vacate_Date date check(Vacate_Date >= now()),
    Return_Date date check(Return_Date >= now()),
    
    FOREIGN KEY (Student_Roll_Number) REFERENCES student(Student_Roll_Number)
  );
`

const insertIntoTable = (data) => {
  return `
    INSERT INTO permissions
    (Student_Roll_No, Initiation_Date, Priority, OTP_Entered, No_of_days, Description, Vacate_Date, Return_Date) 
    VALUES
    ('${data.Student_Roll_No}','${data.Initiation_Date}',${data.Priority},'${data.OTP_Entered}','${data.No_of_days}','${data.Description}', '${Vacate_Date}', '${Return_Date}');
  `
}

const checkIfExists = (Student_Roll_No) => {
  return `
    SELECT * FROM permissions WHERE Student_Roll_No='${Student_Roll_No}';
  `
}

const getFromHID = (hid) => {
  return `
    SELECT * FROM permissions inner join student ON permissions.rollno = student.rollno WHERE hid=${hid} AND status='WAITLISTED';
  `
}



const selectAll = `
  SELECT * FROM permissions;
`

const dropTable = `
  DROP TABLE IF EXISTS permissions;
`

module.exports = {
  createTable,
  insertIntoTable,
  selectAll,
  dropTable,
  checkIfExists,
  getFromHID,
  allotpermissions,
  rejectpermissions
}
