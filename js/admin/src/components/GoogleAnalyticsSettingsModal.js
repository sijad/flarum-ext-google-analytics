/* global app */
import SettingsModal from 'flarum/components/SettingsModal'

export default class GoogleAnalyticsSettingsModal extends SettingsModal {
  className () {
    return 'GoogleAnalyticsSettingsModal'
  }

  title () {
    return app.translator.trans('sijad-google-analytics.admin.google_analytics_settings.title')
  }

  form () {
    return [
      <div className='Form-group'>
        <label>{app.translator.trans('sijad-google-analytics.admin.google_analytics_settings.tracking_code')}</label>
        <div className='helpText'>
          {
            app.translator.trans(
              'sijad-google-analytics.admin.google_analytics_settings.set_up_analytics',
              {a: <a target='_blank' href='https://support.google.com/analytics/answer/1008080?hl=en' />}
            )
          }
        </div>
        <textarea className='FormControl' bidi={this.setting('sijad-google-analytics.tracking_code')} />
      </div>
    ]
  }
}
