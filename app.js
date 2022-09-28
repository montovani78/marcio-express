const express = require('express');

const app = express();

app.get('/',function(req,res){
   res.send('Agora está funcionando a rota "/"');
});

app.get('/outraRota',function(req,res){
   res.send('Esta é outra rota');
});

app.listen(3000, function(){
   console.log("Servidor rodando no endereço http//localhost:3000")
});