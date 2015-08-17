var path = require("path");
var ejs = require("ejs");

module.exports = {
  "logging":
  {
    "file":
    {
      "appLogName": "WinstonLog.log",
      "logsDirectory": path.join(__dirname, "logs"),
    }
  },
  "views":
  {
    "viewPath": path.join(__dirname, "views"),
    "viewExt": "html",
    "engine": ejs.renderFile
  },
  "routing":
  {
    "entryPoint": require("./routes")
  }
}
