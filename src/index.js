import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//firebase install
import firebase from "firebase";
import firebaseConfig from './Services/Firebase';

//react-redux install
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";

//reducers 
import { LoginReducer } from '../src/App/Containers/LoginPage/reducer'

//router imports
import { BrowserRouter as Router , Route } from "react-router-dom"

//containers import
import LoginPage from './App/Containers/LoginPage';

const reducer = combineReducers({
    login: LoginReducer
  });

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer) 

const fireBase = firebase.initializeApp(firebaseConfig);

const appRoute = (
    <Provider store = {store}>  
        
        <Router>
            <div>
                <Route exact path="/" component = {LoginPage} />
            </div>
        </Router>
    </Provider>

)

ReactDOM.render(appRoute, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
