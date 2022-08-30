//começa pelo module.exports 
//msm criando o arquivo de rota n consegue encontrar o bgl, precisa config o consign pq é ele q vai carregar automaticamente as rotas
module.exports=(app)=>{
    app.get("/",(req,res)=>{
        res.render("index.ejs")
    })
}

