const db = require('../database/models');
const bcrypt = require('bcryptjs');

module.exports = {
    login : (req, res) => {
        console.log(bcrypt.hashSync('ryvndng2021rv'))
        res.render('login')
    }, 
    access: (req, res) => {
        const rb = req.body
        db.Usuario.findOne({
            where: {
                email: rb.email
            }
        })
        .then((user) => {
            if(bcrypt.compareSync(rb.password, user.password)){
                console.log('entre-----------------------------')
                req.session.userLogged = user.id
                res.redirect('/admin/dashboard')
            }
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    },
    dashboard: (req, res) => {
        res.render('admin')
    }, 
    clientes: (req, res) => {
        db.Cliente.findAll()
        .then((clientes) => {
            res.render('admin-clientes', {clientes:clientes})
        })
    },
    crearCliente: (req, res) => {
        res.render('crear-cliente')
    },
    guardarCliente: (req, res) => {
        let rb = req.body
        db.Cliente.create({
            nombre: rb.nombre,
            imagen: rb.imagen
        })
        .then((cliente) => {
            res.send(cliente)
        })
    },
    editarCliente: (req, res) => {
        db.Cliente.findByPk(req.params.id)
        .then((cliente) => {
            res.render('editar-cliente', {cliente:cliente})
        })
    },
    actualizarCliente: (req, res) => {
        let rb = req.body
        db.Cliente.update({
            nombre: rb.nombre,
            imagen: rb.imagen
        }, {
            where: {
                id: req.params.id
            }
        })
        .then((cliente) => {
            res.redirect('/admin/clientes');
        })
    },
    equipos: (req, res) => {
        db.Equipo.findAll({include: [{association: 'categoria'}]})
        .then((equipos) => {
            res.render('admin-equipos', {equipos:equipos})
        })

    }, 
    detail: (req, res) => {
        db.Equipo.findByPk(req.params.id)
        .then((equipo) => {
            res.render('admin-detail', {equipo:equipo})
        })
    },
    crearEquipo: (req, res) => {
        db.Categoria.findAll()
        .then((categorias) => {
            res.render('crear-equipo', {categorias:categorias})
        })
        
    }, 
    guardarEquipo: (req, res) => {
        let rb = req.body
        db.Equipo.create({
            nombre : rb.nombre,
            imagen : rb.imagen,
            dato1 : rb.dato1,
            dato2 : rb.dato2,
            dato3 : rb.dato3,
            dato4 : rb.dato4,
            dato5 : rb.dato5,
            ficha_tecnica : rb.ficha_tecnica,
            categoria_id : rb.categoria
        })
        .then((result) => {
            res.redirect('/admin/equipos')
        })
    }, 
    editarEquipo: async (req, res) => {
        let categorias = await db.Categoria.findAll()
        db.Equipo.findByPk(req.params.id, {
            include: [
                {association: 'categoria'}
            ]
        })
        .then((equipo) => {
            res.render('editar-equipo', {equipo:equipo, categorias:categorias})
        })
    }, 
    actualizarEquipo: (req, res) => {
        let rb = req.body
        db.Equipo.update({
            nombre : rb.nombre,
            imagen : rb.imagen,
            dato1 : rb.dato1,
            dato2 : rb.dato2,
            dato3 : rb.dato3,
            dato4 : rb.dato4,
            dato5 : rb.dato5,
            ficha_tecnica : rb.ficha_tecnica,
            categoria_id : rb.categoria
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/equipos')
        })
    }, 
    eliminarEquipo: (req, res) => {
        db.Equipo.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(()=> {
            res.redirect('/admin/equipos')
        })
    }, 
    eliminarCliente: (req, res) => {
        db.Cliente.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/clientes')
        })
    }
}