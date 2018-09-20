const jwt = require('jwt-simple')
const moment = require('moment')
const SECRET_TOKEN = 'miclavedetokens';

function isAuth (req, res, next) {
    console.log(req.headers.authorization)
    if(!req.headers.authorization) {
        return res.status(403).send({ message: 'Sin autorización' })
    }

    const token = req.headers.authorization.split(" ")[1]
    const payload = jwt.decode(token, SECRET_TOKEN)

    if(payload, exp <= moment().unix()) {
        return res.status(401).send({ message: 'El token ha expirado' })
    }
    
    req.user = payload.sub
    next()
}

module.exports.isAuth = isAuth