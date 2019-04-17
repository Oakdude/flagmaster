import store from './store';
import countryApi from './apis/countryApi';
import * as types from './actionTypes';
/*
* This file defines all the actions we use
* They are the action creators
* They are very good to use for tests as well, which we should
* add later on.
* */

/*
* App actions
* */

/*
* Guess the Flag game mode actions
* */

/*
* When option is clicked, the corresponding id
* has to be sent to check if it matches with the one
* in the flag
* */
export const clickOption =  choice => ({
   type:types.OPTION_CLICKED,
    correct: choice
});


//To update filters for when continent is chosen, this will mean
//correct options are loaded
export const setRegionFilter = filter => ({
    type:types.REGION_FILTER_SET,
    payload: { filter }
});



/*
* Action creators that fetch payload
* */

//Load countries
//Dispatch can be accessed as an argument thanks to thunk
export function loadCountries(){
    return function(dispatch){
        return countryApi.getAllCountries().then(countries => {
           dispatch(loadCountriesSuccess(countries));
        }).catch(error => {
            throw(error);
        });
    }
}

export function loadCountriesSuccess(countries) {
    return {
        type: types.LOAD_COUNTRIES_SUCCESS,
        countries
    };
}

/*
* These are all actions just for reference
* but are irrelevant to the flag game.
* Keep them here for now just for references
* */

// let todoId = 0;
//
// export const incrementCounter = () => ({
//     type: 'INCREMENT'
// });
//
// export const decrementCounter = () => ({
//     type: 'DECREMENT'
// });
//
// export const addTodo = text => ({
//     type: 'ADD_TODO',
//     text: text,
//     id: todoId++
// });


