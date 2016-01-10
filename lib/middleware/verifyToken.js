/*jshint esnext: true */

/*customer library*/
import token    from '../token/token';
import responer from '../responer';

function verifyToken(req,res,next) {
  token.verifyToken(req.body.accessToken).then(function (decoded) {
    req.decoded = decoded;
    return next();
  }).catch(function (err) {
    return responer(res,401);
  });
}
