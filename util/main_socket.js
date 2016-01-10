/*jshint esnext: true */

/*npm package*/
import socketioJwt    from 'socketio-jwt';

/*customer library*/
import appsingleton   from './appsingleton';
import event          from '../lib/event';

var sharedInstance = appsingleton.getInstance();

function main_socket() {
  sharedInstance.io.sockets
  .on('connection', socketioJwt.authorize({
    secret: sharedInstance.privatkey,
    timeout: 15000
  })).on('authenticated', function(socket) {
    event(socket);
  });
}

module.exports = main_socket;
