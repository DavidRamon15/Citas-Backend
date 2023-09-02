const jwt = require("jsonwebtoken");
import cfg from '../config';

const verifyUserToken = (req, res, next) => {

    const acesstoken = req.header('Authorization');
    if (!acesstoken || acesstoken == '') res.json('Token_ERROR');

    jwt.verify(acesstoken, cfg.secretTokenAdmin, (err, user) => {
        if (err) {
            res.json('Token_ERROR');
        } else {
            req.user = user;
            return next()
        }
    });
};


module.exports = verifyUserToken;