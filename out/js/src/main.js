System.registerModule("../../../js/src/main.js", [], function() {
  "use strict";
  var __moduleName = "../../../js/src/main.js";
  console.log("es6 loaded");
  var bob = new Monkey({name: 'bob'});
  console.log(bob.name);
  return {};
});
System.get("../../../js/src/main.js" + '');
