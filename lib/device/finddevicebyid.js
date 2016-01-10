/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

function finddevicebyid(pool,userid,type) {
  var ps = new Promise(function(resolve, reject) {
    pool.getConnection(function(err,connection) {
      if(err){
        return reject(err);
      }
      var querystring;
      if(type === 'any'){
        querystring = squel.select()
        .from(process.env.dbname + '.device')
        .where('userid=?',userid)
        .toString();
      }else {
        querystring = squel.select()
        .from(process.env.dbname + '.device')
        .where('userid=?',userid)
        .where('type=?',type)
        .toString();
      }

      connection.query(querystring,function(err,rows) {
        if(err){
          connection.release();
          return reject(err);
        }
        connection.release();
        resolve(rows);
      });
    });
  });
  return ps;
}

module.exports = finddevicebyid;
