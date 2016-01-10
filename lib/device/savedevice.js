/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function savedevice(pool,id,type,token) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function (err,connection) {
      if(err){
        return reject(err);
      }
      var querystring = squel.insert()
      .into(process.env.dbname + '.device')
      .set('userid',id)
      .set('type',type)
      .set('token',token)
      .toString();
      connection.query(querystring,function(err,rows) {
        if(err){
          connection.release();
          return reject(err);
        }
        connection.release();
        return resolve(rows);
      });
    });
  });
  return ps;
}

module.exports = savedevice;
