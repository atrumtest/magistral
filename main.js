/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(5000, function(){
    console.log("Servidor listo");
});

