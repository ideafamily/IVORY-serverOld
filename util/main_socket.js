/*jshint esnext: true */

/*npm package*/
import socketioJwt    from 'socketio-jwt';

/*customer library*/
import appsingleton   from './appsingleton';
import event          from '../lib/event';
import device         from '../lib/device/device';

var sharedInstance = appsingleton.getInstance();

function main_socket() {
  sharedInstance.io.sockets
  .on('connection', socketioJwt.authorize({
    secret: sharedInstance.privatkey,
    timeout: 15000
  })).on('authenticated', function(socket) {
    device.savedevice(sharedInstance.pool,socket.decoded_token.userid,'socket',socket.id);
    event(socket);
    socket.on('disconnect',function() {
      device.deletedevicebytoken(sharedInstance.pool,'socket',socket.id);
    });
  });

}

module.exports = main_socket;
