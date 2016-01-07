/*jshint esnext: true */

/*npm package*/
import FacebookTokenStrategy from 'passport-facebook-token';

/*customer library*/
import appsingleton          from './appsingleton';

var sharedInstance = appsingleton.getInstance();

function fblogin(){
  sharedInstance.passport.use(new FacebookTokenStrategy({
    clientID      : process.env.clientID,
    clientSecret  : process.env.clientSecret
  },function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    return done(error,profile);
  }));
}

module.exports=fblogin;
