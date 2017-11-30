import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'

const reducers = (state , action)=>{
	console.log('state');
}

const store = createStore(reducers , {})

function returnRender(){
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
returnRender();

store.subscribe(returnRender);

registerServiceWorker();
