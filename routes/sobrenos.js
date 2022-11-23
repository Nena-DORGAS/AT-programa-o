module.exports = (app) => {
    app.get('/sobrenos', (req, res) => {
        res.render('sobrenos.ejs')
    })
}