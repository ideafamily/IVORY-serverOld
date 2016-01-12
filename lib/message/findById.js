/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function findById(pool,id) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function(err,connection) {
      if(err){
        return reject(err);
      }
      var querystring = squel.select()
      .from(process.env.dbname + '.message')
      .where(
        squel.expr()
        .and('takerid=' + id)
        .or('senderid=' + id)
      ).toString();
      connection.query(querystring,function (err,rows) {
        if(err){
          connection.release();
          return reject(err);
        }
        connection.release();
        return resolve(rows);
      });
    });
  });
  return(ps);
}

module.exports = findById;
