/*jshint esnext: true */

/*customer library*/
import responer from '../responer';
import message  from '../message/message';
import appsingleton from '../../util/appsingleton';

var sharedInstance = appsingleton.getInstance();

function getUserMessage(req,res,next) {
  message.findById(sharedInstance.pool,req.user.userid).then(function(data) {
    responer(res,200,{'message:' : data});
  }).catch(function(err) {
    responer(res,503);
  });
}

module.exports = getUserMessage;
