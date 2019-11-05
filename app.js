var path = require('path');

var apos = require('apostrophe')({
  shortName: 'ikea',

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'articoli': {
      restApi: true
    },
    'articoli-pages': { extend: 'apostrophe-pieces-pages'},
    'articoli-widgets': {}, 
  }
});
