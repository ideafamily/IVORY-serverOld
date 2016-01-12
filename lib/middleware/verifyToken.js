/*jshint esnext: true */

/*customer library*/
import token    from '../token/token';
import responer from '../responer';

function verifyToken(req,res,next) {
  if(req.headers['x-access-token'] === undefined){
    return responer(res,401);
  }
  token.verifyToken(req.headers['x-access-token']).then(function (decoded) {
    req.user = decoded;
    return next();
  }).catch(function (err) {
    return responer(res,401);
  });
}

module.exports = verifyToken;
