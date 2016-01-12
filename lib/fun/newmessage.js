/*jshint esnext: true */

/*npm package*/
import Promise  from 'bluebird';

/*customer library*/
import device   from '../device/device';
import message  from '../message/message';
import appsingleton from '../../util/appsingleton';
import getDateTime  from '../getDateTime';

var sharedInstance = appsingleton.getInstance();

function newmessage(socket,data) {
  data.sendtime = getDateTime();
  var ps1 = message.savemessage(sharedInstance.pool,data);
  var ps2 = device.finddevicebyid(sharedInstance.pool,data.takerid,'socket');
  ps2.then(function(rows) {
    for(var i in rows){
      sendmessage(sharedInstance.io,data,rows[i].token);
    }
  });
  var ps3 = device.finddevicebyid(sharedInstance.pool,data.takerid,'any');
  ps3.then(function(rows) {
    // TODO: push notification
  });

}

function sendmessage(io,data,id) {
  return new Promise(function(resolve, reject) {
    if(io.sockets.connected[id] === undefined){
      device.deletedevicebytoken(sharedInstance.pool,'socket',id);
      return;
    }
    io.sockets.connected[id].emit('messagearrive',data);
  });
}

module.exports = newmessage;
