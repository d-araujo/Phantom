//importar o pacote do express
const express = require('express')
//executar o express application
const app = express() //é uma função ent n precisa de parâmetros p funcionar

//configurar a porta local
const porta = process.env.PORT || 3000

//habilitar o express para receber dados de formulários
app.use(express.urlencoded({extended:false}))

//importar o consign
const consign = require('consign')

//executar e configurar o consign
consign().include('./routes').into(app) //na execução vai incluir a pasta rotas, sai de config e vai para routes; qnd executar o express vai incluir todo o conteúdo da pasta routes .into(app)
//terminal: "consign v0.1.6 Initialized in C:\Users\logonrmlocal\Downloads\html5up-phantom + .\routes\index.js" - o consign inicializou e incluiu routes (td q for colocado vai aparecer automaticamente)

//indicar a pasta dos assets  (css, js. images, webfonts)
app.use(express.static('./src')) //a pasta static é src 

module.exports = {app,porta} //n vai precisar colocar module.exports p cada um, vai tudo junto separado por , dentro de chave

//passos 
//n ta finding assets pq mudamos o caminho, colocou ele no src
//o html ta dentro da pasta views, ent teria q sair de views ../src/assets (NÃO É DESSA FORMA)
//continua n encontrando: Cannot GET /src/assets/css/main.css
//para q essa pasta esteja disponível para leitura precisa indicar 