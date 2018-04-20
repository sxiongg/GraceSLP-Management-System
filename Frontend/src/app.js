import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/container'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Container />
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);