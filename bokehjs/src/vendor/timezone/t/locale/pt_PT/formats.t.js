#!/usr/bin/env node
require("../../proof")(5, function (tz, equal) {
  var tz = tz(require("timezone/pt_PT"));
  // pt_PT date representation
  equal(tz("2000-09-03", "%x", "pt_PT"), "03-09-2000", "date format");

  // pt_PT time representation
  equal(tz("2000-09-03 08:05:04", "%X", "pt_PT"), "08:05:04", "long time format morning");
  equal(tz("2000-09-03 23:05:04", "%X", "pt_PT"), "23:05:04", "long time format evening");

  // pt_PT date time representation
  equal(tz("2000-09-03 08:05:04", "%c", "pt_PT"), "Dom 03 Set 2000 08:05:04 UTC", "long date format morning");
  equal(tz("2000-09-03 23:05:04", "%c", "pt_PT"), "Dom 03 Set 2000 23:05:04 UTC", "long date format evening");
});
