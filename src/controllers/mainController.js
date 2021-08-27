const db = require('../database/models')

module.exports = {
    home: async (req, res) => {
        let categorias = await db.Categoria.findAll()
        let clientes = await db.Cliente.findAll()

        res.render('index', {categorias:categorias, clientes:clientes})
    },
    about: (req, res) => {
        res.render('about')
    }, 
    equipo: async (req, res) => {
        let categoria = await db.Categoria.findByPk(req.params.id)
        let categorias = await db.Categoria.findAll()

        db.Equipo.findAll({
            where: {
                categoria_id : categoria.id
            },
            include: [
                {
                    association: 'categoria'
                }
            ]
        },{
            
        })
        .then((equipos) => {
            res.render('equipos', {equipos:equipos, UnaCategoria:categoria, categorias:categorias})
        })
    }, 
    detail: (req, res) => {
        db.Equipo.findByPk(req.params.id)
        .then((equipo) => {
            for(let i = 0 ; i < 5 ; i ++){
                let dat = 'dato'+(i+1)
                console.log(dat)
            }
            res.render('detail', {equipo:equipo})
        })
    }
}