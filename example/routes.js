module.exports = function(app)
{
  var logger = app.locals.logger;

  app.get("/", function(req, res)
  {
    logger.warn("This is just a sample app.");
    res.render("index");
  });
};
