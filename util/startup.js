/*jshint esnext: true */

/*npm package*/
import Promise          from 'bluebird';

/*customer library*/
import AppSingleton     from './appsingleton';

function startup() {
  var TAG = 'startup';

  var sharedInstance = AppSingleton.getInstance();

  return new Promise(function(resolve, reject) {
    return resolve({ });
  });
}

export default startup;
