System.registerModule("../../../js/src/monkey-api.js", [], function() {
  "use strict";
  var __moduleName = "../../../js/src/monkey-api.js";
  var Monkey = function Monkey(properties) {
    this.properties = properties;
  };
  ($traceurRuntime.createClass)(Monkey, {toObject: function() {
      return this.properties;
    }}, {});
  return {};
});
System.get("../../../js/src/monkey-api.js" + '');
