/*jshint esnext: true */

/*customer library*/
import  createUser    from './createUser';
import  findById      from './findById';
import  findOrCreate  from  './findOrCreate';

module.exports = {
  createUser    : createUser,
  findById      : findById,
  findOrCreate  : findOrCreate
};
