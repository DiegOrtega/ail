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

app.get("/tienda-home", function(request,response){
   response.render("pages/ecommerce"); 
});

app.get("/agencia", function(request, response){
   response.render("pages/agency") 
});

app.get("/blog-simple", function(request, response){
   response.render("pages/blog-simple") 
});

app.get("/blog", function(request, response){
   response.render("pages/blog") 
});

app.get("/sitio-marketing", function(request, response){
   response.render("pages/marketing-site") 
});

app.get("/noticias", function(request, response){
   response.render("pages/news-magazine") 
});

app.get("/portafolio", function(request, response){
   response.render("pages/portfolio") 
});

app.get("/pagina-producto", function(request, response){
   response.render("pages/product-page") 
});

app.get("/real-estate", function(request, response){
   response.render("pages/real-estate") 
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




