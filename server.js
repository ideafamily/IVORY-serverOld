/*jshint esnext: true */

/*npm package*/
import express      from 'express';
import bodyparser   from 'body-parser';
import cookieparser from 'cookie-parser';
import http         from 'http';
import morgan       from 'morgan';

/*customer library*/
import AppSingleton from './util/appsingleton.js';
import bootstrap    from './util/bootstrap.js';
import startup      from './util/startup.js';
import router       from './util/router.js';
import fblogin      from './util/fblogin.js';

var TAG = 'server';

var sharedInstance = AppSingleton.getInstance();
var app = express();
sharedInstance.app = app;
app.use(morgan('tiny'));
bootstrap();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(sharedInstance.passport.initialize());
fblogin();
router();
var PORT = process.env.PORT || 4000;

startup().then(function() {
  var server = http.createServer(app).listen(PORT);
  var host = server.address().address;
  sharedInstance.L.info(TAG, `HTTP Server running at: ${host}:${PORT}`);
}).catch(function() {
  process.exit();
});
