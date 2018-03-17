import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import{ combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
import queryReducers from './reducers/query-Reducer';
import userReducers from './reducers/user-Reducer';

const allReducers = combineReducers({
    query: queryReducers,
    user: userReducers
});
const store = createStore(allReducers,
    {
    query: '',
    user: {
        id: '',
        name: 'TEST',
        email: ''
    }
},
window.devToolsExtension && window.devToolsExtension()
);



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
