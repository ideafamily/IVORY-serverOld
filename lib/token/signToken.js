/*jshint esnext: true */

/*npm package*/
import jwt          from 'jsonwebtoken';
import Promise      from 'bluebird';

/*customer libray*/
import appsingleton from '../../util/appsingleton';

var sharedInstance = appsingleton.getInstance();

function signToken(data) {
  var token = jwt.sign(data, sharedInstance.privatkey, {expiresIn : '10h'},
  { algorithm: 'RS256'});
  return(token);
}

module.exports = signToken;
