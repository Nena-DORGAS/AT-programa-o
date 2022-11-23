module.exports = (app) => {
    app.get('/ajuda', (req, res) => {
        res.render('ajuda.ejs')
    })
}