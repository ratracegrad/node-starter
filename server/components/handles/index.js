/**
 * Specific HTTP Status Code Handlers
 */

'use strict';

module.exports[404] = function pageNotFound(req, res) {
  res.status(404);
  // TODO: Create 404 view page to render
};
