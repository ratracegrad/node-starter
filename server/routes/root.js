'use strict';

/*===============================
=            MODULES            =
===============================*/

const log = global.logger;

/*=====  End of MODULES  ======*/


module.exports = app => {
  const router = require('express').Router();

  /**
   * Sample Hello World route
   * @param  {String} '/'   url route
   * @param  {Function}     (req, res) contains the request and response of the URL
   * @return {String}       json response
   */
  router.get('/', (req, res) => {
    log.info('Visited Root Route!');
    res.json('Hello World!');
  });

  return router;
};
