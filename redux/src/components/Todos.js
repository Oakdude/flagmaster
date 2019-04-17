// import React from "react";
// import { connect } from "react-redux";
// import store from '../store';
// import {addTodo} from "../actions";
//
//
// class Todos extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     handleTodoAdd = ()  => {
//         console.log("test stuff " + store.getState().todos);
//         this.props.addTodo("ADDED ");
//         console.log(store.getState());
//     };
//
//     render(){
//
//         return(
//             <div>
//                 <div onClick={this.handleTodoAdd}>Todo component hér :D :D </div>
//                 <button onClick={() => {
//                     store.dispatch({
//                         type: 'ADD_TODO',
//                         text: 'test'
//                     })
//                 }}>
//                 ADD TODO
//                 </button>
//                 <ul>
//                     {store.getState().todos.map(todo =>
//                         <li>
//                             {todo.text}
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         );
//     }
// }
//
// export default connect(
//     null,
//     { addTodo }
// )(Todos);