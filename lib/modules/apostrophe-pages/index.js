// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: "home",
      label: "Home",
    },
    {
      name: "landing-page",
      label: "Home Page",
    },
    {
      name: "timeline-page",
      label: "Timeline Page",
    },
    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
};
