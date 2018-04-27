import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducers from './reducers'
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let store = createStoreWithMiddleware(reducers);



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

