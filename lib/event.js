/*jshint esnext: true */

/*npm package*/


/*customer library*/
import appsingleton    from '../util/appsingleton';
import fun             from './fun/fun';

var sharedInstance = appsingleton.getInstance();

function event(socket) {
  socket.on('newmessage',function(data) {
    data.senderid = socket.decoded_token.userid;
    fun.newmessage(socket,data);
  });
}

module.exports = event;
