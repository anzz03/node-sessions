var session=require('express-session')



//methods for accessing login page

module.exports.loginpage=(req,res)=>{
    res.sendFile(__dirname+"/views/login.html");
}


module.exports.login=(req,res)=>{
    req.session.user = req.body.username;

    res.sendFile(__dirname+"/views/profile.html");
}

module.exports.profilePage=(req,res)=>{
    res.send("Welcome " +req.session.user);
}