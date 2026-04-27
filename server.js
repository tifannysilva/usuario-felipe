const express = require('express');
const path = require('path');

const validar = require('./middlewares/validar');

const app = express();

app.use(express.json());
 
//servir arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//rota com middleware
app.post('/cadastro', validar, (req,res) =>{
    res.json({mensagem: "paciente cadastrado com sucesso"});
});
app.listen(3000,()=>{
    console.log("rodando na porta 3000");
});
