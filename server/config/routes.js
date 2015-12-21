'use strict';

module.exports = app => {
  /*----------  ROUTERS  ----------*/
  const rootRoutes = require('../routes/root')(app);

  /*----------  MAP ROUTES TO PARENT URLS  ----------*/
  app.use('/', rootRoutes);
};
