const createTable = `
  CREATE TABLE IF NOT EXISTS room(
    Room_ID varchar(10) PRIMARY KEY,
    Hostel_Name varchar(255),
    No_of_inmates int,
    No_of_outlets int,
    PRIMARY KEY(Room_ID),
    vacant boolean DEFAULT '1',
    FOREIGN KEY(Hostel_Name) references hostel(Hostel_Name)
  );
`

const allotRoom = (Room_ID) => {
  return `
    UPDATE room SET vacant='No' WHERE Room_ID='${Room_ID}';
  `
}

const insertIntoTable = (data) => {
  return `
    INSERT INTO room(Room_ID, Hostel_Name, No_of_inmates, No_of_outlets) values('${data.Room_ID}',${data.No_of_inmates},${data.No_of_outlets});
  `
}

const getDetailsFromHid = (Hostel_Name) => {
  return `
    SELECT * FROM room where Hostel_Name=${Hostel_Name};
    `
}

const selectAll = `
  SELECT * FROM room;
`

const dropTable = `
  DROP TABLE IF EXISTS room CASCADE;
`

module.exports = {
  createTable,
  insertIntoTable,
  selectAll,
  dropTable,
  getDetailsFromHid,
  allotRoom
}
