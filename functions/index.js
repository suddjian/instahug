"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// this doesn't work yet, have to enable billing to deploy it
exports.countHugs = functions.database
  .ref("/hugs/{hugid}")
  .onWrite(async (change) => {
    const total = functions.database.ref("stats/total");
    return total.transaction((current) => {
      return (current || 0) + 1;
    });
  });
