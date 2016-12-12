var Promise = require('es6-promise').Promise,
    express = require('express'),
    path = require('path'),
    fs = require('fs'),
    stylus = require('stylus'),
    bodyparser = require('body-parser'),

    // the port this app will be listening on
    port = process.argv[2] || 3000,

    // this has to be the fully-qualified path to a folder, typically "/public",
    // where public/static assets will be served from
    absolutePathToPublicAssets = path.join(__dirname, 'public'),

    // this has to be the fully-qualified path to a folder, typically "/templates",
    // where view templates will be found
    absolutePathToViewFolder = path.join(__dirname, 'views'),

	// TODO - get db via submodule
    // db = require('./notes-mysql/models/index.js'),

    app = express();


app.use(bodyparser.json()); // for parsing application/json
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(absolutePathToPublicAssets));
app.use(stylus.middleware(absolutePathToPublicAssets));
app.set('views', absolutePathToViewFolder);
app.set('view engine', 'pug');

app.get("/", function(req,res){
    res.render('homepage');
});
app.get("/app",function(res,res){
    res.render('permissions-app');
});

console.log('listening on port ' + port);
app.listen(port);
