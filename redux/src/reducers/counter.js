

/*
* counter reduces, handles the change of state
*/
export default function counter (state = 0, action){
    // console.log('Got to ADD_TODO reducer');
    switch (action.type){
         case 'INCREMENT':
            return state + 1;
         case 'DECREMENT':
             return state - 1;
         default:
            return state;
        }
    };


