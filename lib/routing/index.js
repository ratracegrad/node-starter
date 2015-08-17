'use strict';

module.exports = function (app, config) {

  var entryPoint = config.entryPoint;

  entryPoint(app);

};
