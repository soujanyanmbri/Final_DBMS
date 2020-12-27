const createTable = `
CREATE TABLE IF NOT EXISTS attendance(
  Permission_ID varchar(10),
  Faculty_ID varchar(9),
  Status_Of_Approval varchar(20) DEFAULT 'WAITLISTED',
);
`
const allotpermissions = (Permission_ID) => {
    return `
      UPDATE approve SET Status_Of_Approval='ALLOTTED' WHERE Permission_ID=${Permission_ID};
    `
  }
  
  const rejectpermissions = (Permission_ID) => {
    return `
      UPDATE approve SET Status_Of_Approval='REJECTED' WHERE Permission_ID=${Permission_ID};
    `
  }