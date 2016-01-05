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

var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(session({'cookieName' : 'session',
                 'secret' : 'i am a zombie, but i drink milk 0W0',
                 'duration' : 12 * 60 * 60 * 1000,
                 'activeDuration' : 5 * 60 * 1000}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/',function(req,res){
  res.send('hello world!!!!');
});
/*
var port = process.env.PORT || 4000;
app.listen(port,function(err) {
  if(err){
    console.log(err);
  }else {
    console.log('server is listening on ' + port);
  }
});
*/
