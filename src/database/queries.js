import { updateUserById, verificateUser } from "../controllers/user.controller";

export const queries = {

  getAllAppointment: `SELECT * FROM angulardb.appointments`,
  getAllClients: `SELECT * FROM angulardb.clients`,
  getClient: `SELECT * FROM angulardb.clients where id = ? `,
  getClientsCIF: `SELECT CIF FROM angulardb.clients`,
  getAppointment: `SELECT * FROM angulardb.appointments where idappointment = ? `,
  createAppointment: `INSERT INTO appointments ( CIF, numEmployee, startDate ,startTime, endTime) VALUES (?, ?, ? ,? , ?)`,

  createClient: `INSERT INTO clients ( CIF  ,companyName , address , municipality , province, startDate , endDate , numReco ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  editClient: `UPDATE clients 
              SET CIF = ? , companyName = ? , address = ? , municipality = ?, province = ?,startDate = ? ,endDate= ? , numReco= ?  WHERE id = ?`,
  editAppointment: `UPDATE appointments 
              SET CIF = ? , numEmployee = ? , startDate = ? , numEmployeeReal = ?  WHERE idappointment = ? `,
  removeClient: `DELETE FROM angulardb.clients WHERE id = ? `,

  verificateUser: `SELECT count(user) as numUser FROM angulardb.users where user = ? and password = ? `,
}