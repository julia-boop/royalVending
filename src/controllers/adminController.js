module.exports = {
    login : (req, res) => {
        res.render('login')
    }, 
    dashboard: (req, res) => {
        res.render('admin')
    }, 
    clientes: (req, res) => {
        res.render('admin-clientes')
    }, 
    equipos: (req, res) => {
        res.render('admin-equipos')
    }
}