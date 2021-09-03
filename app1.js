var express = require("express");
var app = express();
var studentRoutes = require("./student_routes");
var employeeRoutes = require("./employee_routes");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
   res.sendFile(__dirname+"/homepage.html")
})


app.use("/students",studentRoutes)

app.use("/employees",employeeRoutes)

app.listen(8090,function(){console.log("listening on 8090")})