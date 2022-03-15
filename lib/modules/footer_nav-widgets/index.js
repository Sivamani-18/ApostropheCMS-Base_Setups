const schema = require("./lib/schema.js");
const _ = require("lodash");

module.exports = {
  label: "Footer Menu",
  addFields: [
    {
      name: "linkTitle",
      label: "Link Title",
      type: "string",
      required: true,
    },
    {
      name: "links",
      label: "Links",
      type: "array",
      titleField: "linkText",
      schema: _.clone(schema),
    },
  ],
};
