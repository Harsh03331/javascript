    var express = require('express');
var router = express.Router();

var employees = [
    {
        fullname: "harshini",
        email: "harsh@gmail.com",
        mobile: 9988,
        city: "Bangalore",
        profession: "manager",
        industry: "IT"
    },
    {
        fullname: "vignesh",
        email: "vic@gmail.com",
        mobile: 8899,
        city: "chennai",
        profession: "lead",
        industry: "IT"
    },
    {
        fullname: "Kanna",
        email: "kanna@gmail.com",
        mobile: 9898,
        city: "chennai",
        profession: "developer",
        industry: "abc"
    }

];

router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/empregistration.html");    
})


router.get("/emplist",function(req,res){
    res.render("employees",{
        allemployees:employees
    })
})

router.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("Employee registraiton successful")    
})

router.get("/details/:x",function(req,res)
{
    var emp = employees.find((e)=>{
        if(e.mobile==req.params.x)
        {
            return true
        }
        else{
            return false;
        }
    })
    res.render("employeedetails",{
        empdetails:emp
    })
})

module.exports = router;