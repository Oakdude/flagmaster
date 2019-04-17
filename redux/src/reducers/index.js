import { combineReducers } from "redux";
import counter from './counter';
// import todos from './todos';
import guessTheFlag from './guessTheFlag';
import filter from './filter';

//renders the app to the DOM
/*
*
* The combineReducers helper function turns
* an object whose values are different reducing
* functions into a single
* reducing function you can pass to createStore.
* The resulting reducer calls every child reducer,
* and gathers their results into a single state object.
*
* This has a part in defining the state shape
* You can see the state shape if you look at the console
* when the application starts
* */
export default combineReducers({ guessTheFlag, counter, filter });
