var path = require('path');
var apos = require('apostrophe')({
  shortName: 'ikea',

  bundles: ['apostrophe-events'], //boudles degli eventi
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'articoli': {},
    'articoli-pages': { extend: 'apostrophe-pieces-pages' },
    'articoli-widgets': {},
    'salotti': {},
    'salotti-pages': { extend: 'apostrophe-pieces-pages' },
   
    'apostrophe-workflow': {
      alias: 'workflow',
      replicateAcrossLocales: false
    },
    'apostrophe-events': {},
    'apostrophe-events-pages': {
      extend: 'apostrophe-pieces-pages',
    },
    'apostrophe-events-widgets': {},
    'apostrophe-search': {},
    'apostrophe-pages': {
      park: [
        {
          title: 'Search',
          slug: '/search',
          type: 'apostrophe-search',
          label: 'Search',
          published: true
        },
        {
          title: 'Events List',
          slug: '/events-list',
          type: 'apostrophe-events-page',
          label: 'Events',
          published: true
        }
      ]
    },
  }
});
