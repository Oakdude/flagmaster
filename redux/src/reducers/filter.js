import * as types from "../actionTypes";


export default function filter (state = [], action)  {
    // console.log("I GOT TO OPTION REDUCER");
    switch (action.type) {
        case types.REGION_FILTER_SET:
            return action.payload.filter;
        default:
            return state;
    }
};