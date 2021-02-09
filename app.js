var express = requiere('express');
var app = express.createServer();
app.set('views',_dirname + '/views');
app.get('/',function(req,res){
    res.render('index.html',{layout:false});
});
app.listen(3000);