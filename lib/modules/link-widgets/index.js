const schema = require("./lib/schema.js");
const _ = require("lodash");

module.exports = {
  label: "Nav Link",
  addFields: [
    {
      name: "links",
      label: "Links",
      type: "array",
      titleField: "linkText",
      schema: _.clone(schema),
    },
  ],
};
