
const jwt = require('jwt-simple');
const moment = require('moment');
const SECRET_TOKEN = 'miclavedetokens';


function createToken (user) {
    const payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }
    var token = jwt.encode(payload, SECRET_TOKEN)
    console.log(token)
    return token
}



module.exports.createToken = createToken