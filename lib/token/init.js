/*jshint esnext: true */

/*npm package*/
import randomstring from 'randomstring';

/*customer library*/
import appsingleton from '../../util/appsingleton';

function init() {
  var privatkey = randomstring.generate({
    length: 32
  });
  var sharedInstance = appsingleton.getInstance();
  sharedInstance.privatkey = privatkey;
  process.env.privatkey = privatkey;
}
module.exports = init;
