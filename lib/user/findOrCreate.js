/*jshint esnext: true */

/*npm package*/
import squel    from 'squel';
import Promise  from 'bluebird';

/*customer library*/
import createUser from './createUser';
import findById   from './findById';

function findOrCreate(pool,data) {
  var ps = new Promise(function(resolve, reject) {
    findById(pool,data._json.id).then(function(rows) {
      if(rows[0] === undefined){
        createUser(pool,data._json).then(function() {
          return resolve({'userid' : data._json.id,
                          'newuser' : true});
        }).catch(function(err) {
          return reject(err);
        });
      }else {
        return resolve({'userid' : rows[0].userid,
                        'newuser' : false});
      }
    }).catch(function(err) {
      return reject(err);
    });
  });
  return ps;
}

module.exports = findOrCreate;
