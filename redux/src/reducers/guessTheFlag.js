import * as types from '../actionTypes';

/*
* GUESS THE FLAG REDUCER
* This reducer takes care of the part of the store that has to do directly with the gameplay
* of the Guess the flag reducer.
* Right now it only updates the score if the correct option was chosen. If not it returns
* an unchanged state. It also does so for unknown actions
*
* There is a possibility this reducer could also be used for the second game mode,
* if so the naming conventions should be changed into something more suitable
* */


// //Possibility for using composition if we decide to have the game state more complicated
// //The composition further helps modularising the reducers
// const options = (state, action) => {
//     console.log("I GOT TO OPTION REDUCER");
//     switch (action.type) {
//         case 'OPTION_CLICKED':
//             // //Einhverskonar villumeðhöndlun held ég
//             // if(state.id !== action.id){
//             //     return state;
//             // }
//             // return state; //Þarg að gera eitthvað meira í þessum reducer til að fá hann til að athuga
//             // //hvort option var réttud
//             if(action.choice === 'correct'){
//                 return(console.log("correct"));
//             }
//             else return(console.log("inccorect"));
//         default:
//             return state;
//     }
// };


//Reduces composition to simplify a more complex reducer
// const regionFiltering = (state, action) => {
//     console.log("I GOT TO REGION FILTERING");
//     switch (action.type) {
//         /*
//         * Returns a new and filtered list of options depending on continent filtering
//         * */
//         case types.REGION_FILTER_SET:
//             let options = [];
//             //mappa í options út frá filter
//             options.map(action.region)
//             return options;
//
//         default:
//             return state;
//     }
// };


//The parent reducer in the reducer composition for the Guess the Flag game mode
export default function guessTheFlag (state = [], action)  {
    // console.log("I GOT TO OPTION REDUCER");
    switch (action.type) {
        case 'OPTION_CLICKED':
            if(action.correct === 'correct'){
                 return { ...state, score: state.score + 1 }
            }
            else{
                return {...state};
            }
            // //This is an example of how the child reducer would be called
            // return state.map(c =>
            //     options(c, action)
            // );
        case types.LOAD_COUNTRIES_SUCCESS:
            // console.log(action.countries);
            return Object.assign([], state, action.countries);
            // return {...state, countries: action.countries};
        default:
            return state;
    }
};