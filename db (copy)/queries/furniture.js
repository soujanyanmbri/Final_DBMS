const createTable = `
  CREATE TABLE IF NOT EXISTS furniture(
    Furniture_Name varchar(255) PRIMARY KEY,
    Room_ID varchar(10),
    Quantity int,
    PRIMARY KEY(Furniture_Name, Room_ID),
    FOREIGN KEY(Room_ID) references Room(Room_ID)
  );
`

const dropTable = `
  DROP TABLE IF EXISTS furniture;
`
const insertIntoTable = (furniture) => {
    return `
      INSERT INTO furniture
      (Furniture_Name, Room_ID, Quantity)
       values(
        '${furniture.Furniture_Name}',
        '${furniture.Room_ID}',
        '${furniture.Quantity}'
      );
    `
  }

module.exports = {
    createTable,
    dropTable,
    insertIntoTable,
  }
  