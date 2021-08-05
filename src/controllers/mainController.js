module.exports = {
    home: (req, res) => {
        res.render('index')
    },
    about: (req, res) => {
        res.render('about')
    }, 
    equipo: (req, res) => {
        res.render('equipos')
    }, 
    detail: (req, res) => {
        res.render('detail')
    }
}