/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

/*customer library*/
import getDateTime from '../getDateTime';

function savemessage(pool,data) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function (err,connection) {
      if(err){
        return reject(err);
      }
      var querystring = squel.insert()
      .into(process.env.dbname  + '.message')
      .set('message',data.message)
      .set('url',data.url)
      .set('sendtime',data.sendtime)
      .set('takerid',data.takerid)
      .toString();
      connection.query(querystring,function (err,rows) {
        if(err){
          connection.release();
          return reject(err);
        }else {
          connection.release();
          return resolve(rows);
        }
      });
    });
  });
  return ps;
}

module.exports = savemessage;
