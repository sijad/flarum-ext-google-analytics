'use strict';

System.register('sijad/google/analytics/components/GoogleAnalyticsSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  var SettingsModal, GoogleAnalyticsSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      GoogleAnalyticsSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(GoogleAnalyticsSettingsModal, _SettingsModal);

        function GoogleAnalyticsSettingsModal() {
          babelHelpers.classCallCheck(this, GoogleAnalyticsSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(GoogleAnalyticsSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(GoogleAnalyticsSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'GoogleAnalyticsSettingsModal';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('sijad-google-analytics.admin.google_analytics_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('sijad-google-analytics.admin.google_analytics_settings.tracking_code')
              ),
              m(
                'div',
                { className: 'helpText' },
                app.translator.trans('sijad-google-analytics.admin.google_analytics_settings.set_up_analytics', { a: m('a', { target: '_blank', href: 'https://support.google.com/analytics/answer/1008080?hl=en' }) })
              ),
              m('textarea', { className: 'FormControl', bidi: this.setting('sijad-google-analytics.tracking_code') })
            )];
          }
        }]);
        return GoogleAnalyticsSettingsModal;
      }(SettingsModal);

      _export('default', GoogleAnalyticsSettingsModal);
    }
  };
});;
'use strict';

System.register('sijad/google/analytics/main', ['flarum/app', 'sijad/google/analytics/components/GoogleAnalyticsSettingsModal'], function (_export, _context) {
  var app, GoogleAnalyticsSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_sijadGoogleAnalyticsComponentsGoogleAnalyticsSettingsModal) {
      GoogleAnalyticsSettingsModal = _sijadGoogleAnalyticsComponentsGoogleAnalyticsSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('sijad-google-analytics', function () {
        app.extensionSettings['sijad-google-analytics'] = function () {
          return app.modal.show(new GoogleAnalyticsSettingsModal());
        };
      });
    }
  };
});