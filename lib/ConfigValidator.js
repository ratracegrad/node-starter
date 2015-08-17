'use strict';

var tv4 = require("tv4");

module.exports = {

  validate: function(record, schema)
  {
    var jsonValidator = tv4.freshApi();
    var result = jsonValidator.validateMultiple(record, schema);

    if (result.valid === false)
    {
      if (schema.id !== undefined)
        result.schemaId = schema.id;

      result.errors.forEach(function(error)
      {
        delete error.stack;
      });

      console.dir(result);
      process.exit(1);
    }

  }

};
