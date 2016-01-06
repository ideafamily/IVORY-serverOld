/*jshint esnext: true */

/*npm package*/
import mysql        from  'mysql';

/*customer library*/
import AppSingleton from './appsingleton';

function dbPoolInit() {
  var TAG = 'dbPoolInit';
  var sharedInstance = AppSingleton.getInstance();
  var pool = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.host,
    user            : process.env.user,
    password        : process.env.password
  });
  sharedInstance.pool = pool;
}

module.exports = dbPoolInit;
