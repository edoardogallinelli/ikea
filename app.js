var path = require('path');
var apos = require('apostrophe')({
  shortName: 'ikea',
  bundles: ['apostrophe-events'], //boudles degli eventi
  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'articoli': {},
    'articoli-pages': { extend: 'apostrophe-pieces-pages' },
    'articoli-widgets': {extend: 'apostrophe-pieces-widgets'},
    'salotti': {},
    'salotti-pages': { extend: 'apostrophe-pieces-pages' },
    'camere': {},
    'camere-pages': {extend: 'apostrophe-pieces-pages'},
    'camere-widgets': {extend: 'apostrophe-pieces-widgets'},
    'apostrophe-workflow': {
      alias: 'workflow',
      replicateAcrossLocales: false
    },
    'apostrophe-events': {},
    'apostrophe-events-pages': {extend: 'apostrophe-pieces-pages'},
    'apostrophe-events-widgets': {extend: 'apostrophe-pieces-widgets'},
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
          title: 'Eventi',
          slug: '/events-list',
          type: 'apostrophe-events-page',
          label: 'Events',
          published: true
        },
        {
          title: 'Articoli',
          slug: '/lista-articoli',
          type: 'articoli-pages',
          label: 'Articoli',
          published: true
        },
        {
          title: 'Camere',
          slug: '/lista-camere',
          type: 'camere-pages',
          label: 'Camere',
          published: true
        },
        {
          title: 'Salotti',
          slug: '/lista-salotti',
          type: 'salotti-pages',
          label: 'Salotti',
          published: true
        }
      ]
    },
  }
});