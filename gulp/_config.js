'use strict';

// Contains various globs + options for running gulp tasks

let cfg = {};

/*===================================
=            DIRECTORIES            =
===================================*/

cfg.dirs = {};

/*=====  End of DIRECTORIES  ======*/


/*=============================
=            GLOBS            =
=============================*/

cfg.globs = {};
cfg.globs.allJS = '**/*.js';

/*=====  End of GLOBS  ======*/

/*=============================
=            FILES            =
=============================*/

cfg.files = {};
cfg.files.nodeServer = `./server/${cfg.globs.allJS}`;
cfg.files.webWorkers = `./worker/${cfg.globs.allJS}`;

/*=====  End of FILES  ======*/


/*===============================
=            OPTIONS            =
===============================*/

cfg.options = {};

/*=====  End of OPTIONS  ======*/


module.exports = cfg;
