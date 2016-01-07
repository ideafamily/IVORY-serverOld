/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function findById(pool,id) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function (err,connection) {
      if(err){
        reject(err);
      }else {
        connection.query('USE ' + process.env.dbname,function(err) {
          if(err){
            connection.release();
            reject(err);
          }else {
            var querystring = squel.select()
            .from('user')
            .where('userid=?',id)
            .limit(1)
            .toString();
            connection.query(querystring,function (err,rows) {
              if(err){
                connection.release();
                reject(err);
              }else {
                connection.release();
                resolve(rows);
              }
            });
          }
        });
      }

    });
  });
  return ps;
}

module.exports = findById;
