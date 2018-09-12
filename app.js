/* @file    app.js
 * @author  Sebastien LEGRAND
 * @email   oaxley@gmail.com
 * @date    2018-09-08
 * 
 * @brief   NodeJS application to showcase the demoscene effects
 */

//------ imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var yaml = require('js-yaml');
var fs = require('fs');

//------ configuration

// read the configuration file
var config = null
try {
  config = yaml.safeLoad(fs.readFileSync('config.yml', 'utf8'));
} catch(e) {
  console.log(e);
  process.exit(1);
}

// setup configuration arrays with default values
var cfgViews = [ path.join(__dirname, 'views') ];
var cfgStyles = [ {source: 'styles', target: 'public', root: __dirname} ];
var cfgStatics = [ path.join(__dirname, 'public') ]
var cfgRouters = [ {file: './routes/index', endpoint: '/' }]

// fill the arrays 
config.projects.forEach((project) => {
  var dirs = project.directories;
  var xprs = project.express;
  var name = project.name;

  // project root directory
  var rootDir = path.join(__dirname, dirs.root, name, dirs.demo);

  // add the view to the array
  cfgViews.push( path.join(rootDir, dirs.view) );

  // add the style to the array
  cfgStyles.push({
    source: dirs.style,
    target: dirs.static,
    root: rootDir
  });

  // static directory
  cfgStatics.push( path.join(rootDir, dirs.static) );

  // routers
  cfgRouters.push({
    file: path.join(rootDir, dirs.route, xprs.router),
    endpoint: xprs.endpoint
  });
});


//------ begin
// create the express application
var app = express();

// view engine setup
app.set('views', cfgViews);
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// configure the less middleware
cfgStyles.forEach((style) => {
  app.use(
    lessMiddleware(style.source, {
      dest: style.target,
      pathRoot: style.root,
      preprocess: {
        path: function(pathname, req) {
          return pathname.replace(path.sep + 'stylesheets' + path.sep, path.sep);
        }
      }
    })
  );
});

// add static directories
cfgStatics.forEach((static) => {
  app.use( express.static(static));
});

// create the routers
cfgRouters.forEach((router) => {
  var file = require(router.file);
  app.use(router.endpoint, file);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
