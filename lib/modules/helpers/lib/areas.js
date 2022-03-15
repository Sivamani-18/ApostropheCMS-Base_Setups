const _ = require("lodash");
let baseToolbar = [
  "Styles",
  "Bold",
  "Italic",
  "Blockquote",
  "Link",
  "Anchor",
  "Unlink",
  "NumberedList",
  "BulletedList",
  "Split",
];
let baseStyles = [
  { name: "Body Para (P)", element: "p", attributes: { class: "text-base" } },
  {
    name: "Section Header (H2)",
    element: "h2",
    attributes: { class: "o-section-header" },
  },
  { name: "Headline (H3)", element: "h3", attributes: { class: "headline" } },
  {
    name: "Sub Headline (H4)",
    element: "h4",
    attributes: { class: "subheadline" },
  },
  { name: "Sub Title (P)", element: "p", attributes: { class: "sub-title" } },
];
let narrowWidgets = {
  "apostrophe-rich-text": {
    toolbar: baseToolbar,
    styles: baseStyles,
  },
  image: {},
  columns: {
    controls: {
      position: "bottom-left",
    },
  },
  link: {},
};

let wideWidgets = {
  "two-panel": {},
};

module.exports = {
  baseToolbar: baseToolbar,
  baseStyles: baseStyles,
  baseWidgets: _.extend({}, narrowWidgets, wideWidgets),
  narrowWidgets: narrowWidgets,
};
