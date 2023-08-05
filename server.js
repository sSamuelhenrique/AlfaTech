const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('/assets'));
const path = require('path');

// ...

/* app.use(express.static(path.join(__dirname, '/assets'))); */
app.use("/assets",  express.static('assets'));
app.use("/css", express.static('css'));
app.get("/", function(req, res ){
    res.render("pages/index", );
    
})

app.get("/table", function(req, res){
    res.render("pages/table");
})

console.log("testando");
app.listen(8080);