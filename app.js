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
    'apostrophe-workflow': {
      alias: 'workflow',
      replicateAcrossLocales: false
    },
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
    },
    'apostrophe-blog': {},
    'apostrophe-blog-pages': {},
    'apostrophe-blog-widgets': {},
    'apostrophe-pages': {
      // We must list `apostrophe-blog-page` as one of the available page types
      types: [
        {
          name: 'apostrophe-blog-page',
          label: 'Blog'
        },
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        }
      ]
    }
  }
});
