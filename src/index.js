import React from 'react';
import ReactDOM from 'react-dom'

import App from "./App";
import './index.css';

//setting up redux
import { Provider  } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";//use new suggestion instead of deprecated
import thunk from 'redux-thunk';

import reducers from './reducers';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('app'));
// ReactDOM.render(<App />, document.getElementById('root'));