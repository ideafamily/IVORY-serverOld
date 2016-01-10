/*jshint esnext: true */

/*customer library*/
import deletedevicebytoken  from './deletedevicebytoken';
import finddevicebyid       from './finddevicebyid';
import savedevice           from './savedevice';

module.exports = {
  deletedevicebytoken : deletedevicebytoken,
  finddevicebyid      : finddevicebyid,
  savedevice          : savedevice
};
