/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function deletedevicebytoken(pool,type,token) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function (err,connection) {
      if(err){
        return reject(err);
      }
      var querystring = squel.delete()
      .from(process.env.dbname + '.device')
      .where('type=?',type)
      .where('token=?',token)
      .toString();
      connection.query(querystring,function(err) {
        if(err){
          connection.release();
          return reject(err);
        }
        connection.release();
        return resolve({});
      });
    });
  });
  return ps;
}

module.exports = deletedevicebytoken;
