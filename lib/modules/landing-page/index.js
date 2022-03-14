module.exports = {
  extend: "apostrophe-custom-pages",
  label: "Landing Page",
  afterConstruct: function (self) {
    self.addDispatchRoutes();
  },
  construct: function (self, options) {
    self.addDispatchRoutes = function () {
      self.dispatch("/", self.landing_page);
    };

    self.landing_page = function (req, callback) {
      return self.sendPage(req, self.renderer("landingpage", {}));
    };
  },
};
