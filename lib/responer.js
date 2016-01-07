/*jshint esnext: true */

function responer(res,statusCode,data) {
  if(data === undefined){
    res.sendStatus(statusCode);
  }else {
    res.status(statusCode).send(data);
  }
}

module.exports = responer;
