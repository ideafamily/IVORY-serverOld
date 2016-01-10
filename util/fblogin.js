/*jshint esnext: true */

/*npm package*/
import FacebookTokenStrategy from 'passport-facebook-token';

/*customer library*/
import appsingleton          from './appsingleton';
import user                  from '../lib/user/user';

var sharedInstance = appsingleton.getInstance();

function fblogin(){
  sharedInstance.passport.use(new FacebookTokenStrategy({
    clientID      : process.env.clientID,
    clientSecret  : process.env.clientSecret
  },function (accessToken, refreshToken, profile, done) {
    var pool = sharedInstance.pool;
    user.findOrCreate(pool,profile).then(function(id) {
      return done(null,{'userid' : id});
    }).catch(function(err) {
      return done(err);
    });
  }));
}

module.exports=fblogin;
