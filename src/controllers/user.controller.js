
import { queries, connection } from '../database';
import { manageError } from '../database/connection';
import cfg from '../config';

const jwt = require("jsonwebtoken");

export const verificateUser = async (req, res) => {
  const { user, password } = req.body;
  try {
    connection.connect((err) => {
      connection.query(queries.verificateUser, [user, password], (err, results) => {
        if (results[0].numUser == 1) {
          const token = jwt.sign({ user }, cfg.secretTokenAdmin, {
            expiresIn: "1h",
          });
          res.header('Authorization', token).json({
            message: 'User authenticated',
            token: token
          });
          res.json(results.recordset);
        } else {
          res.json(false);
        }
      });
    });
  } catch (error) {
    manageError(error);
  }
}

export const verificateAccess = (req, res, next) => {
  const acesstoken = req.header('Authorization');
  if (!acesstoken || acesstoken == '') {
    res.json(false);
    return;
  }
  jwt.verify(acesstoken, cfg.secretTokenAdmin, (err, user) => {
    err ? res.json() : res.json(true)
  });
};










