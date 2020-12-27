const createTable = `
  CREATE TABLE IF NOT EXISTS parent (
    Parent_ID varchar(10) PRIMARY KEY,
    Parent_Name varchar(255), NOT NULL,
    Parent_Contact_Number varchar(10) NOT NULL,
    Parent_Email varchar(255) NOT NULL
  );
`


const dropTable = `
  DROP TABLE IF EXISTS parent;
`
const insertIntoTable = (parent) => {
    return `
      INSERT INTO parent
      (Parent_ID, Parent_Name, Parent_Contact_Number, Parent_Email)
       values(
        '${parent.Parent_ID}',
        '${parent.Parent_Name}',
        '${parent.Parent_Contact_Number}',
        '${parent.Parent_Email}'
      );
    `
  }

const getParent = (Parent_ID) => {
    return `
    SELECT * FROM parent WHERE Parent_ID='${Parent_ID}';
  `
  }
module.exports = {
    createTable,
    dropTable,
    insertIntoTable,
    getParent
  }
  