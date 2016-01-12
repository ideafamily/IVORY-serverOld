/*jshint esnext: true */

/*npm package*/
import express from 'express';

/*customer library*/
import appsingleton from './appsingleton.js';
import middleware   from '../lib/middleware/middleware';

var sharedInstance = appsingleton.getInstance();

module.exports = function() {
  var app = sharedInstance.app;
  app.get('/',function(req,res) {
    console.log(sharedInstance.passport);
    res.send('hello');
  });

  app.get('/message',middleware.verifyToken,middleware.getUserMessage);

  app.get('/auth/facebook/token',
    sharedInstance.passport.authenticate('facebook-token',{ session: false }),
    middleware.makeToken
  );
};
