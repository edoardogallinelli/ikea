var _ = require('lodash');

module.exports = search;

function search(options, callback) {
  return new search.Search(options, callback);
}

search.Search = function(options, callback) {
  var apos = options.apos;
  var app = options.app;
  var self = this;
  self._apos = apos;
  self._app = app;
  self._action = '/apos-search';
  self._perPage = options.perPage || 10;
  self._options = options;

  self._apos.mixinModuleAssets(self, 'search', __dirname, options);

  self.setBridge = function(modules) {

    self.unsearchable = [];
    apos.emit('unsearchable', self.unsearchable);
  };

  self.loader = function(req, callback) {

    if (!req.page) {
      return callback(null);
    }

    if (req.page.type !== 'search') {
      return callback(null);
    }

    var searchFilters = [
      { name: 'other', label: 'Pages' }
    ];

    apos.emit('addSearchFilters', searchFilters);

    if (self._options.filters !== undefined) {
      searchFilters = _.cloneDeep(self._options.filters);
    }

    req.extras.searchFilters = searchFilters;

    var q = self._apos.sanitizeString(req.query.q);
    req.extras.q = q;

    var resultGroups = [];

    var filtersActive = [];
    var filtersInactive = [];


    req.extras.filterStatus = {};

    if (searchFilters) {
      _.each(searchFilters, function(filter) {
        var value = self._apos.sanitizeBoolean(req.query[filter.name], true);
        if (value) {
          filter.active = true;
          filtersActive.push(filter.name);
          req.extras.filterStatus[filter.name] = '';
        } else {
          filtersInactive.push(filter.name);
          req.extras.filterStatus[filter.name] = '0';
        }
      });
    }

    var criteria = {};

    var $in;
    var $nin;
    var typeCriteria = {};

    if (filtersInactive.length) {
      if (!_.contains(filtersActive, 'other'))  {
        typeCriteria.$in = filtersActive;
      } else {
        typeCriteria.$nin = _.filter(filtersInactive, function(name) { return name !== 'other';
        });
      }
    }
    if (self.unsearchable.length) {
      typeCriteria.$nin = (typeCriteria.$nin || []).concat(self.unsearchable);
    }
    if (typeCriteria.$in || typeCriteria.$nin) {
      criteria.type = typeCriteria;
    }

    apos.emit('addSearchCriteria', req, criteria);

    var options = {};

    var sort;
    if ((!req.query.sort) || (req.query.sort === 'quality')) {
      sort = 'q';
    } else {
      sort = { start: -1, publishedAt: -1, createdAt: -1 };
    }

    options.sort = sort;

    options.search = q;

    self.addPager(req, options);

    if (req.extras.pager.page > 100) {
      req.notfound = true;
      return setImmediate(callback);
    }

    return self.get(req, criteria, options, function(err, results) {
      if (err) {
        console.error(err);
        req.statusCode = 500;
        return callback(null);
      }
      self.setPagerTotal(req, results.total);
      req.extras.search = results.pages;
      req.template = self.renderer('index');
      return callback(null);
    });
  };

  self.get = function(req, criteria, options, callback) {
    return self._apos.get(req, criteria, options, callback);
  };
  self.addPager = function(req, options) {
    var pageNumber = self._apos.sanitizeInteger(req.query.page, 1, 1);

    req.extras.pager = {
      page: pageNumber
    };

    options.skip = self._perPage * (pageNumber - 1);
    options.limit = self._perPage;
  };

  self.setPagerTotal = function(req, total) {
    if (req.extras.pager) {
      req.extras.pager.total = Math.ceil(total / self._perPage);
      if (req.extras.pager.total < 1) {
        req.extras.pager.total = 1;
      }
      if (req.extras.pager.total > 100) {
        req.extras.pager.total = 100;
      }
    }
  };

  app.get(self._action + '/search-result', function(req, res) {
    var slug = req.query.slug;
    if (typeof(slug) !== 'string') {
      res.statusCode = 404;
      return res.send('Not Found');
    }
    return apos.getPage(req, slug, function(err, page) {
      if (!page) {
        res.statusCode = 404;
        return res.send('Not Found');
      }
      if (page.slug.match(/\//)) {
        return res.redirect(page.slug);
      } else {
        var context = {};
        apos.emit('searchResult', req, res, page, context);
        if (!context.accepted) {
          res.statusCode = 404;
          return res.send('Not Found');
        } else {

        }
      }
    });
  });
  if (callback) {
    return process.nextTick(callback);
  }
};

