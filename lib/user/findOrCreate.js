/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

/*customer library*/
import createUser from './createUser';
import findById   from './findById';

function findOrCreate(pool,data) {
  var ps = new Promise(function(resolve, reject) {
    findById(pool,data.id).then(function(rows) {
      if(rows[0] === undefined){
        createUser(pool,data).then(function() {
          resolve(data.id);
        }).catch(function(err) {
          reject(err);
        });
      }else {
        resolve(rows[0].userid);
      }
    }).catch(function(err) {
      reject(err);
    });
  });
  return ps;
}

module.exports = findOrCreate;
