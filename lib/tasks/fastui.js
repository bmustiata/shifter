/*
 Copyright (c) 2012, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://yuilibrary.com/license/
 */

var fastUi = require("fast-ui");

exports.fastui = function (options, blob, done) {
    fastUi.pack("ui/", "js/ui.js");

    done(null, blob);
};
