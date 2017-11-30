import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';

const reducers = (state,action)=>{

}
const store = createStore(reducers,{list:[]});
function renderpage() {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
renderpage();
store.subscribe(renderpage);

registerServiceWorker();
