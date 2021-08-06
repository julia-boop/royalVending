const db = require('../database/models');

function hasAcccess(req, res, next){
    if(res.locals.userLocal == undefined){
        res.redirect('/')
    } else {
        next()
    }
}

module.exports = hasAcccess;