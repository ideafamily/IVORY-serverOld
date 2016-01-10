/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function findById(pool,id) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function (err,connection) {
      if(err){
        return reject(err);
      }
      var querystring = squel.select()
      .from(process.env.dbname + '.user')
      .where('fbid=?',id)
      .limit(1)
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

module.exports = findById;
