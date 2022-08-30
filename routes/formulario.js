module.exports = (app)=>{
    app.get('/formulario', (req,res)=>{
        res.render('formulario.ejs')
    })

    app.post('/formulario', (req,res)=>{
        var dados = req.body
        res.send(dados)
    })
}

//why its not working? antes tava funcionadndo, oq tem de diferente é q 
//async await - qnd precisa conectar e usar a resposta