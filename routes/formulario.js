const {conexao, conteudo} = require('../config/database')


module.exports = (app)=>{
    app.get('/formulario', (req,res)=>{
        res.render('formulario.ejs')
    })

    app.post('/formulario', async (req,res)=>{
        var dados = await req.body
        conexao()

        const doc = await new conteudo({
            estilos:dados.estilos,
            imagem:dados.imagem,
            titulo:dados.titulo,
            texto:dados.texto,
        }).save()
        res.redirect('/formulario')
    })
}

//why its not working? antes tava funcionadndo, oq tem de diferente é q 
//async await - qnd precisa conectar e usar a resposta