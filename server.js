/*jshint esnext: true */

/*npm package*/
import express      from 'express';
import bodyparser   from 'body-parser';
import cookieparser from 'cookie-parser';
import passport     from 'passport';
import session      from 'express-session';
import http         from 'http';

/*customer library*/
import AppSingleton from './util/appsingleton.js';
import bootstrap    from './util/bootstrap.js';
import startup      from './util/startup.js';
import dbPoolInit   from './util/dbPoolInit.js';

var TAG = 'server';

var sharedInstance = AppSingleton.getInstance();
var app = express();

sharedInstance.app = app;
sharedInstance.passport = passport;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(session({'cookieName' : 'session',
                 'secret' : 'i am a zombie, but i drink milk 0W0',
                 'duration' : 12 * 60 * 60 * 1000,
                 'activeDuration' : 12 * 60 * 60 * 1000}));
app.use(passport.initialize());
app.use(passport.session());

bootstrap();
dbPoolInit();

var PORT = process.env.PORT || 4000;

startup().then(function() {
  var server = http.createServer(app).listen(PORT);
  var host = server.address().address;
  sharedInstance.L.info(TAG, `HTTP Server running at: ${host}:${PORT}`);
});
