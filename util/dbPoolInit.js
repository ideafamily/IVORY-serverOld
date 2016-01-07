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
    host            : process.env.HOST,
    user            : process.env.USERNAME,
    password        : process.env.PASSWORD
  });
  sharedInstance.pool = pool;
}

module.exports = dbPoolInit;
