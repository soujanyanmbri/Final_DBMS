const createTable = `
  CREATE TABLE IF NOT EXISTS hostel(
    Hostel_Name varchar(255) PRIMARY KEY,
    Location varchar(255) NOT NULL,
    No_of_floors int,
    No_of_Rooms int,
    Elevator boolean NOT NULL
  );
`

const insertIntoTable = (Hostel_Name, Location, No_of_floors, No_of_Rooms, Elevator) => {
  return `
    INSERT INTO hostel(Hostel_Name, Location, No_of_floors, No_of_Rooms, Elevator) values('${Hostel_Name}','${Location}', '${No_of_floors}', '${No_of_Rooms}', '${Elevator}');
  `
}

const updateHostel = (Hostel_Name, data) => {
  return `
    UPDATE hostel SET name='${data.name}', capacity=${data.capacity} WHERE hid=${hid}; 
  `
}

const getFromID = (Hostel_Name) => {
  return `
    SELECT * FROM hostel WHERE Hostel_Name=${Hostel_Name};
  `
}

const selectAll = `
  SELECT * FROM hostel;
`

const dropTable = `
  DROP TABLE IF EXISTS hostel CASCADE;
`

module.exports = {
  createTable,
  insertIntoTable,
  updateHostel,
  selectAll,
  dropTable,
  getFromID
}
