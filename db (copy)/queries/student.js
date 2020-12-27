const createTable = `
  CREATE TABLE IF NOT EXISTS student(
    Student_Roll_No varchar(9) PRIMARY KEY,
    Name varchar(255) NOT NULL,
    Year_of_study int,
    Department varchar(255) NOT NULL,
    Hostel_Name varchar(255) NOT NULL,
    Room_ID varchar(10),
    Parent_ID varchar(10) NOT NULL,
    FOREIGN KEY(Hostel_Name) references Hostel(Hostel_Name),
    FOREIGN KEY(Room_ID) references Room(Room_ID),
    Email varchar(30) UNIQUE NOT NULL,
    Phone_Number varchar(10) NOT NULL,
  );
`

const insertIntoTable = (applicant) => {
  return `
    INSERT INTO student values(
      '${applicant.Student_Roll_No}',
      '${applicant.Name}',
      '${applicant.Year_of_study}',
      '${applicant.Department}',
      '${applicant.Hostel_Name}',
      '${applicant.Room_ID}',
      '${applicant.Parent_ID}',
      '${applicant.Email}',
      '${applicant.Phone_Number}',
    );
  `
}

const getDetails = (Student_Roll_No) => {
  return `
    SELECT * FROM student WHERE rollno='${Student_Roll_No}'
  `
}

const updateStudent = (Student_Roll_No, applicant) => {
  return `
    UPDATE student SET 
    Student_Roll_No='${applicant.Student_Roll_No}',
    Name='${applicant.Name}',
    Year_of_study='${applicant.Year_of_study}',
    Department='${applicant.Department}',
    Hostel_Name='${applicant.Hostel_Name}',
    Room_ID='${applicant.Room_ID}',
    Parent_ID='${applicant.Parent_ID}',
    Email='${applicant.Email}'
    Phone_Number ='${applicant.Phone_Number}'
    WHERE Student_Roll_No='${Student_Roll_No}';
  `
}

const selectAll = `
  SELECT * FROM student;
`

const dropTable = `
  DROP TABLE IF EXISTS student CASCADE;
`

module.exports = {
  createTable,
  insertIntoTable,
  getDetails,
  updateStudent,
  selectAll,
  dropTable
}
