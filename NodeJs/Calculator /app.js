const express = require('express')
const myapp = express();

myapp.use(express.urlencoded({extended:true}));
myapp.use(express.json());

myapp.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

myapp.post('/',(req,res)=>{
    var num1 = Number(req.body.number1);
    var num2 = Number(req.body.number2);
    var result = num1 + num2;
    res.send(`The result is ${result}`);
})

myapp.listen(3000,()=>{
    console.log("El puerto 3000 esta escuchando");
})