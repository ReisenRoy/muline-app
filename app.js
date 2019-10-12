var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mysql           = require("mysql");
    
//      app config
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
    
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tmpusr',  
  database : 'floss',      
  password: '123'
});
var select ="SELECT * FROM muline WHERE DMC is not NULL GROUP BY DMC ORDER BY DMC";
var selectOne = "SELECT * FROM muline WHERE DMC LIKE ?";
var update = "UPDATE muline SET stock = ?, Kirova = ?, Anchor = ?, Madeira = ?, color_ru = ?, color_en = ?, color = ? WHERE DMC = ?"

app.get("/", function(req,res){
    res.redirect("/list");
});

app.get("/list", function(req,res){
    connection.query(select, function(err, results){
        if(err) {
            console.log(err);
        } else {
            res.render("index", {muline: results});
        }
    });
});

app.get("/list/:id/edit", function(req, res) {
    connection.query(selectOne, req.params.id, function(err, results){
         if(err) {
            console.log(err);
        } else {
            res.render("edit", {muline: results});
        }
    });
});

app.put("/list/:id", function(req,res){
    connection.query(update, [req.body.stock, req.body.Kirova, req.body.Anchor, req.body.Madeira, req.body.color_ru, req.body.color_en, req.body.color, req.params.id], function(err) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/list");
        }
    });
});


app.get("*", function(req, res){
    res.redirect("/list ");
});

//      port config
app.listen(3000, process.env.IP, function(){
   console.log("Server Has Started!");
});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 