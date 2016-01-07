/*jshint esnext: true */

/*npm package*/
import express from 'express';

/*customer library*/
import appsingleton from './appsingleton.js';

var router = express.Router();
var sharedInstance = appsingleton.getInstance();

router.get('/',function(req,res) {
  console.log(sharedInstance.passport);
  res.send('hello');
});
/*
router.post('/auth/facebook/token',
  sharedInstance.passport.authenticate('facebook-token',{ session: false }),
  function (req, res) {
    // do something with req.user
    console.log(sharedInstance.passport);
    res.send(200);
  }
);*/

module.exports = router;
