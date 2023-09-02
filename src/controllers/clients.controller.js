
import { queries, connection } from '../database';
import { manageError } from '../database/connection'


export const getClients = async (req, res) => {
    try {
        connection.connect(() => {
            connection.query(queries.getAllClients, (err, results) => {
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
export const getClientCIF = async (req, res) => {
    try {
        connection.connect(() => {
            connection.query(queries.getClientsCIF, (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const getClient = async (req, res) => {
    const { id } = req.params
    try {
        connection.connect(() => {
            connection.query(queries.getClient, [id], (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const createClient = async (req, res) => {
    const { CIF, companyName, address, municipality, province, startDate, endDate, numReco } = req.body
    try {
        connection.connect(() => {
            connection.query(queries.createClient, [CIF, companyName, address, municipality, province, startDate, endDate, numReco], (err, results) => {
                res.json(results);

            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const editClient = async (req, res) => {
    const { id, CIF, companyName, address, municipality, province, startDate, endDate, numReco } = req.body

    try {
        connection.connect(() => {
            connection.query(queries.editClient, [CIF, companyName, address, municipality, province, startDate, endDate, numReco, id], (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};
export const removeClient = async (req, res) => {
    const { id } = req.params;
    try {
        connection.connect(() => {
            connection.query(queries.removeClient, [id], (err, results) => {
                res.json(results);
            });
        });
    } catch (error) {
        manageError(error)
    }
};