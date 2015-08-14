module.exports = function (app) {

  var logger = app.locals.logger;

  app.get("/", function (req, res) {
    logger.warn("No root route defined");
    res.send("node-starter");
  });
};
