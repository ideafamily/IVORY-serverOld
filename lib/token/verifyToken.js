/*jshint esnext: true */

/*npm package*/
import jwt          from 'jsonwebtoken';
import Promise      from 'bluebird';

/*customer libray*/
import appsingleton from '../../util/appsingleton';

var sharedInstance = appsingleton.getInstance();

function verifyToken(token) {
  var ps = new Promise(function(resolve, reject) {
    jwt.verify(token,sharedInstance.privatkey,function(err,decoded){
      if(err){
        reject(err);
      }else {
        resolve(decoded);
      }
    });
  });
  return ps;
}

module.exports = verifyToken;
