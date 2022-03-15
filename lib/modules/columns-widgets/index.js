const _ = require("lodash");
const { baseWidgets } = require("../helpers/lib/areas.js");

const columnWidgets = _.cloneDeep(baseWidgets);
delete columnWidgets.columns;

module.exports = {
  label: "Columns",
  skipInitialModal: true,
  addFields: [
    {
      name: "config",
      label: "Column Configuration",
      type: "select",
      def: "two",
      choices: [
        { label: "Three Columns", value: "three" },
        { label: "Two Columns", value: "two" },
        { label: "One Columns", value: "one" },
      ],
    },
    {
      name: "background",
      label: "Background",
      type: "select",
      def: "none",
      choices: [
        { label: "None", value: "none" },
        { label: "Cream", value: "background-brand-secondary" },
        { label: "Light Purple", value: "background-light" },
      ],
    },
    {
      name: "column1",
      label: "Column One",
      contextual: true,
      type: "area",
      options: {
        widgets: columnWidgets,
      },
    },
    {
      name: "column2",
      label: "Column Two",
      contextual: true,
      type: "area",
      options: {
        widgets: columnWidgets,
      },
    },
    {
      name: "column3",
      label: "Column Three",
      contextual: true,
      type: "area",
      options: {
        widgets: columnWidgets,
      },
    },
  ],
};
