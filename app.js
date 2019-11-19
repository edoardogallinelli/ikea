var path = require('path');

var apos = require('apostrophe')({
  shortName: 'ikea',

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'articoli': {},
    'articoli-pages': { extend: 'apostrophe-pieces-pages' },
    'articoli-widgets': {},
    'salotti': {},
    'salotti-pages': { extend: 'apostrophe-pieces-pages' },
    'apostrophe-search': {},
    'apostrophe-pages': {
      park: [
        {
          title: 'Search',
          slug: '/search',
          type: 'apostrophe-search',
          label: 'Search',
          published: true
        }
      ]
    }
    }
});
