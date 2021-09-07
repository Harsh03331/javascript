var express = require('express');
var router = express.Router();
var students = [
    {
        fullname: "kokila",
        email: "koki@gmail.com",
        mobile: 77665,
        city: "chennai",
        technology: "java",
        company: "xyz"
    },
    {
        fullname: "priya",
        email: "priya@gmail.com",
        mobile: 98987,
        city: "bangalore",
        technology: "javascript",
        company: "abc"
    },
    {
        fullname: "vicky",
        email: "vic@gmail.com",
        mobile: 86678,
        city: "chennai",
        technology: "python",
        company: "vhkk"
    }
];

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

router.get("/details/:ph",function(req,res){
    var stud = students.find((s)=>{
        if(s.mobile == req.params.ph){
            return true
        }
        else{
            return false
        }
    })
    res.render("studentdetails",{
        studdetails:stud
    })
})

module.exports = router;