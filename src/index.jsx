import React from 'react'
import ReactDOM  from 'react-dom'
import { Provider } from 'react-redux'
import { store } from 'state/store'
import AppContainer from './AppContainer.jsx'

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('AppContainer')
)