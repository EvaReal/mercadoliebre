const express=require('express');
const path=require('path');
const app=express();

app.use('/static', express.static(__dirname+'/public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/views/home.html');
})

app.get('/register', (req,res)=>{
    res.sendFile(__dirname+'/views/register.html');
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname+'/views/login.html');
})

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
})

//app.listen(3000, ()=>{
//    console.log('Servidor funcionando');
//})
