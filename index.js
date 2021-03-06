var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get("/index", function(request,response){
   response.render("pages/home"); 
});

app.get("/404", function(request, response){
   response.render("pages/404") 
});

app.get("/blog-single", function(request, response){
   response.render("pages/blog-single") 
});

app.get("/cart", function(request, response){
   response.render("pages/cart") 
});

app.get("/checkout", function(request, response){
   response.render("pages/checkout") 
});

app.get("/contact-us", function(request, response){
   response.render("pages/contact-us") 
});

app.get("/login", function(request, response){
   response.render("pages/login") 
});

app.get("/product-details", function(request, response){
   response.render("pages/product-details") 
});

app.get("/shop", function(request, response){
   response.render("pages/shop") 
});

app.get("/blog", function(request, response){
   response.render("pages/blog") 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




