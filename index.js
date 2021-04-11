var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');


var app = express();





app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use(session({secret:'ABC123',saveUninitialized:true,resave:true}));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/controller/views/login.html");
});


app.post('/loginData',(req,res)=>{
    req.session.user = req.body.username;
    console.log(req.body.username);
    res.redirect('/profile');

})

app.get('/profile',(req,res)=>{
    if(req.session.user)
    {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("welcome " +req.session.user);
    res.write("<a href='" + "/logout" + "'>Logout</a>");
    res.end();
    }
    else
    {
        res.redirect('/');
    }
});

app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})



app.listen(3000);