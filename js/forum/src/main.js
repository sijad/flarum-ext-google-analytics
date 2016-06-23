/* global ga */
/* global m */

import { extend } from 'flarum/extend'
import app from 'flarum/app'
import Page from 'flarum/components/Page'

app.initializers.add('sijad-google-analytics', () => {
  extend(Page.prototype, 'config', function (original, isInitialized) {
    if (isInitialized || typeof ga === 'undefined') return
    ga('send', 'pageview', m.route())
  })
})
