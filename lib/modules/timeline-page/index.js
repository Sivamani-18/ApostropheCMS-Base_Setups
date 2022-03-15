module.exports = {
  extend: "apostrophe-custom-pages",
  label: "Timeline Page",
  afterConstruct: function (self) {
    self.addDispatchRoutes();
  },
  construct: function (self, options) {
    self.addDispatchRoutes = function () {
      self.dispatch("/", self.timeline_page);
    };

    self.timeline_page = function (req, callback) {
      return self.sendPage(req, self.renderer("timeline", {}));
    };
  },
};
