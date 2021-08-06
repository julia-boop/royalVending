const db = require('../database/models');

async function createLocals(req, res, next) {
    if(req.session.userLogged != undefined) {
        let user = await db.Usuario.findByPk(req.session.userLogged)
        if(user) {
            res.locals.userLocal = user.id
        }
    }
    next()
}

module.exports = createLocals;