/*jshint esnext: true */

/*customer library*/
import token    from '../token/token';
import responer from '../responer';

function makeToken(req,res,next) {
  var mytoken = token.signToken(req.user);
  responer(res,200,{'accessToken' : mytoken});
}

module.exports = makeToken;
