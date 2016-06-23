'use strict';

System.register('sijad/google/analytics/main', ['flarum/extend', 'flarum/app', 'flarum/components/Page'], function (_export, _context) {
  var extend, app, Page;
  return {
    setters: [function (_flarumExtend) {
      /* global ga */
      /* global m */

      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsPage) {
      Page = _flarumComponentsPage.default;
    }],
    execute: function () {

      app.initializers.add('sijad-google-analytics', function () {
        extend(Page.prototype, 'config', function (original, isInitialized) {
          if (isInitialized || typeof ga === 'undefined') return;
          ga('send', 'pageview', m.route());
        });
      });
    }
  };
});