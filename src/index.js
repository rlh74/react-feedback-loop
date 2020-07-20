import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import './index.css';
import App from './components/App/App';

const feedbackData = {
  feeling: '',
  understanding: '',
  support: '',
  comments: ''
}

const feedbackReducer = (state = feedbackData, action) =>{
  if (action.type === 'SET_FEELING'){
    state.feeling = action.payload.value;
    return state;
  } else if (action.type === 'SET_UNDERSTANDING'){
    state.understanding = action.payload.value;
    return state;
  } else if (action.type === 'SET_SUPPORT'){
    state.support = action.payload.value;
    return state;
  }
    return state;
  
}

// create the redux store 
const storeInstance = createStore(
  combineReducers({
    feedbackReducer
  }),
  applyMiddleware(logger)
)

// Provide the store to the App
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
  document.getElementById('root'));

