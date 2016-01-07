/*jshint esnext: true */

/*npm package*/
import Promise          from 'bluebird';
import Q                from 'q';

/*customer library*/
import AppSingleton     from './appsingleton';
import token            from '../lib/token/token';
import dbPoolInit       from './dbPoolInit.js';

function startup() {
  var TAG = 'startup';

  var sharedInstance = AppSingleton.getInstance();
  token.init();
  dbPoolInit();
  var list = [new Promise(function(resolve, reject) {
    return resolve();
  })];
  return new Promise(function(resolve, reject) {
    Q.all(list).then(function () {
      sharedInstance.L.info(TAG, "Startup done!");
      return resolve({ });
    });
    Q.any(list).catch(function(err) {
      sharedInstance.L.warn(TAG, "Startup failed!");
      sharedInstance.L.error(TAG, "error: "+err);
      return reject({ });
    });
  });
}

export default startup;
