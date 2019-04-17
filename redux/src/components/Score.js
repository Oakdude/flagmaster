import React from "react";
import { connect } from "react-redux";
import store from '../store';
import getScore from '../selectors';


/*
* Simple component that shows the total game score
* For now, when clicked it showes the store state
* */

//Hlýtur að vanta einhverskonar map state to props hér líka

// class Score extends React.Component {
//     constructor(props) {
//         super(props);
//     }

    const handleClick = () => {
        console.log("THIS IS THE COMPLETE APPLICATION STATE: ");
        console.log(store.getState());
    };

    const Score = ({ score }) => (
        <div>
            <div>Score is: {score} </div>
            <div onClick={handleClick()}>Click here to print application state in the console </div>
            {/*{console.log(store.getState())}*/}
        </div>
    );

    //mapStateToProps is called everytime the store changes
    const mapStateToProps = state => {
        const score = getScore(state);
        return { score };
    };


    // render(){
    //     return(
    //         <div>
    //             {/*Needs fixing, shouldn't be fetched directly from store, or what?*/}
    //             <div>Score is: {store.getState().guessTheFlag.score}</div>
    //             <div onClick={this.handleClick}>Click here to print the application state in the console</div>
    //         </div>
    //     );
    // }
// }

export default connect(mapStateToProps)(Score);

