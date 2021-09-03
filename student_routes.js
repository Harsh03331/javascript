var express = require('express');
var router = express.Router();
var students = [];

router.get("/regstudent",function(req,res){
    res.sendFile(__dirname+"/sturegistration.html");    
})

router.get("/studentlist",function(req,res){
    res.render("students",{
        allstudents:students
    })
})

router.post("/sturegister",function(req,res){    
    students.push(req.body);
    res.send("Student registraiton successful")    
})

module.exports = router;