import app from 'flarum/app'

import GoogleAnalyticsSettingsModal from 'sijad/google/analytics/components/GoogleAnalyticsSettingsModal'

app.initializers.add('sijad-google-analytics', () => {
  app.extensionSettings['sijad-google-analytics'] = () => app.modal.show(new GoogleAnalyticsSettingsModal())
})
