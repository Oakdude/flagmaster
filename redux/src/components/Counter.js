// import React from "react";
// import { connect } from "react-redux";
// import store from '../store';
// import {incrementCounter, decrementCounter} from '../actions';
// // import {decrementCounter} from '../actions';
//
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//
//     handleIncrementClick = () => {
//        // store.dispatch({ type: 'INCREMENT'});
//         this.props.incrementCounter();
//         // incrementCounter();
//         console.log(store.getState());
//     };
//
//     handleDecrementClick = () => {
//         this.props.decrementCounter();
//         console.log(store.getState());
//     };
//
//     render(){
//         console.log(store.getState());
//
//         return(
//             <div>
//               <div onClick={this.handleIncrementClick}>INCREMENT </div>
//               <div onClick={this.handleDecrementClick}>DECREMENT</div>
//             </div>
//          );
//     }
// }
//
// export default connect(
//     null,
//     { incrementCounter, decrementCounter }
// )(Counter);