
import { queries, connection } from '../database';
import { manageError } from '../database/connection'

export const getAppointments = async (req, res) => {
    try {
        connection.connect((err) => {
            connection.query(queries.getAllAppointment, (err, results) => {
                res.json({
                    data: results,
                    recordsTotal: results.length,
                    recordsFiltered: 10,
                });
            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const getAppointment = async (req, res) => {
    const { id } = req.params
    try {
        connection.connect((err) => {
            connection.query(queries.getAppointment, [id], (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const createAppointment = async (req, res) => {
    const { CIF, numEmployee, startDate, startTime, endTime } = req.body
    try {
        connection.connect((err) => {
            connection.query(queries.createAppointment, [CIF, numEmployee, startDate, startTime, endTime], (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const editAppointment = async (req, res) => {
    const { idappointment, CIF, numEmployee, startDate, numEmployeeReal } = req.body
    try {
        connection.connect((err) => {
            connection.query(queries.editAppointment, [CIF, numEmployee, startDate, numEmployeeReal, idappointment], (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};