const schema = require("./lib/schema.js");
const _ = require("lodash");

module.exports = {
  label: "How It Works",
  addFields: [
    {
      name: "Maintitle",
      label: "Main Title",
      type: "string",
      required: true,
    },
    {
      name: "subTitle",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      name: "workload",
      label: "Work List",
      type: "array",
      titleField: "workload",
      schema: _.clone(schema),
    },
  ],
};
