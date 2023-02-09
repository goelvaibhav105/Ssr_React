// CLIENT SIDE COMPANION OF SR

import React from 'react'
import {hydrate} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'
import App from './components/app'

// Read the state sent with markup
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state)

/**
 * hydrate the page to make sure both server and client
 * side pages are identical. This includes markup checking,
 * react comments to identify elements and more.
 */

// REPLACE RENDER WITH HYDRATE

//  mainly it is same as render but it is used to hydrate elements rendered by server side

hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
)
