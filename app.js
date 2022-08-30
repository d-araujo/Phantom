
//importar as configs do servidor
const {app,porta} = require('./config/servidor') //p importar chama . dps barra dps as pastas; nessa linha está criando duas constantes (mesma estrutura q usou na exportação usa-se na importação 

//ligar o servidor
app.listen(porta,()=>{
    console.log("http://localhost:"+porta) //tem duas formas de ligar, recomendável usar o dev pois usa o node, mas continua existindo o start porém fodase vapo no npm run dev
})



//oq ele tinha feito antes só de meme
//importar as configs do servidor
//const {servidor} = require('./config/servidor') //p importar chama . dps barra dps as pastas 

//armazenar o express application
//const app = servidor.app //armazenar: fala oq vc quer . nome da const //why any? o arquivo do servidor é config externo, independemente do require as infos n estão disponíveis ent precisa exportar

//const porta = servidor.porta //a informação é individual, tem q exportar um por um... nesse caso porta ainda n existe ent tem q ir lá no servidor e colocar module.exports = servidor.porta

