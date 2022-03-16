module.exports = [
  {
    name: "workheading",
    label: "Work Heading",
    type: "string",
    required: true,
  },
  {
    name: "worktitle",
    label: "Work Heading",
    type: "string",
  },
  {
    name: "image",
    label: "Image",
    type: "singleton",
    widgetType: "apostrophe-images",
    options: {
      limit: 1,
    },
  },
  {
    name: "imgbgStyle",
    label: "BG Style",
    type: "select",
    choices: [
      { label: "Light", value: "step-img-box" },
      { label: "Dark", value: "step-img-dark-box" },
    ],
  },
];
