/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function createUser(pool,data){
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function(err,connection) {
      connection.query('USE ' + process.env.dbname,function(err) {
        if(err){
          connection.release();
          reject(err);
        }else {
          var querystring = squel.insert()
          .into('user')
          .set('email',data.email)
          .set('name',data.name)
          .set('userid',data.id)
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
    });
  });
  return ps;
}

module.exports = createUser;
