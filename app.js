const path = require("path");

// pm2-runtime is great at running node apps inside containers properly,
// but its arguments can be mistaken for a command line Apostrophe task
if (process.argv.find((arg) => arg.match(/ProcessContainer/))) {
  process.argv = [process.argv[0], "app.js"];
}

const apos = require("apostrophe")({
  shortName: "ApostropheCMS-Base_Setup",

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    // Apostrophe module configuration

    // The module also contains useful library .js files containing ready-made options
    // for areas and the like, which other modules `require` to avoid redundancy.
    helpers: { extend: "apostrophe-module" },

    "landing-page": {},

    // Content Widgets
    "image-widgets": { extend: "apostrophe-widgets" },
    "two-panel-widgets": { extend: "apostrophe-widgets" },
    "link-widgets": { extend: "apostrophe-widgets" },
    "footer_nav-widgets": { extend: "apostrophe-widgets" },

    // Layout Widgets
    "columns-widgets": { extend: "apostrophe-widgets" },

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    "apostrophe-templates": {
      viewsFolderFallback: path.join(__dirname, "views"),
    },

    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    "apostrophe-images": {
      enableAltField: true,
    },
  },
});
