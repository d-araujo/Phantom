const mongoose = require('mongoose')

const user = 'user3tri'
const pw = 'user3tri'
const cluster = 'fiaptecnico.acs9n.mongodb.net'
const db = 'html5up'

const conexao = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://'+user+':'+pw+'@'+cluster+'/'+db)
} 

const modelo = mongoose.Schema({
    estilos:String,
    imagem:String,
    titulo:String,
    texto:String,
    cadastradoem:{type:Date, default:Date.now} //default: na ausência dessa informação pega a data atual
})

const conteudo = mongoose.model('conteudo',modelo)

module.exports = {conteudo, conexao}