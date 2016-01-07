/*jshint esnext: true */

/*npm package*/
import Winston          from 'winston';
import Promise          from 'bluebird';
import passport         from 'passport';

/*customer library*/
import AppSingleton     from './appsingleton';

function bootstrap() {
  var TAG = 'bootstrap';
  var sharedInstance = AppSingleton.getInstance();
  sharedInstance.log = new (Winston.Logger)({
        transports: [
            new (Winston.transports.Console)({
                colorize    : 'all',
                level       : 'verbose'
            })
        ]
    });
    sharedInstance.L = {
        verbose :   (tag, log) => {sharedInstance.log.verbose(`[${tag}] : ${log}`);},
        info    :   (tag, log) => {sharedInstance.log.info(`[${tag}] : ${log}`);},
        error   :   (tag, log) => {sharedInstance.log.error(`[${tag}] : ${log}`);},
        warn    :   (tag, log) => {sharedInstance.log.warn(`[${tag}] : ${log}`);}
    };
    sharedInstance.passport = passport;
    sharedInstance.L.info(TAG, "Bootstrap complete!");  
}

module.exports = bootstrap;
