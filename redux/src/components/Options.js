import React, {PropTypes} from "react";
import Option from './Option';
import { connect } from "react-redux";
// import { getOptions } from '../apis/staticApi';
import { loadCountries} from "../actions";
import {getCountryOptionsByFilter, getFilteredOptions, getOptions} from '../selectors';
import store from '../store';

/*
* This component renders the four options that are
* shown with each flag
* Options is a container component as it needs to be aware of the application state
* */
// class Options extends React.Component{
//     constructor(props){
//         super(props);
//     }




    //Sendir amk rétt region niður

//ATH, ég set aftur inn frekar selector eins og einfalda API sem sækir relevant
//optionslista

    // const Options = ({ countries }) => (
    //     <div>
    //         {console.log("FÉKK PROPS: " + store.getState())}
    //         <h2>Options</h2>
    //         <ul>
    //
    //             {countries.map((country) => {
    //             return <Option key={country.id} option={country}/>;
    //         })}
    //         </ul>
    //     </div>
    // );

    const Options = ({ options }) => (
        <div>
            <h2>Options</h2>
            {/*{console.log("IN MAPPER " + options.countries)}*/}
            <ul>
                {options.map((option) => {
                    return <Option key={option.name} option={option}/>;
                })}
            </ul>
        </div>
    );




// const mapStateToProps = state => {
//         //loadCountries er selector sem sækir filteraðan lista,
//         //sem er filteraður á undan, þegar continent er valin
//         const { visibilityFilter } = state;
//         const options = getFilteredOptions(state, visibilityFilter);
//         // const options = getOptions(state);
//         // const options = store.getState();
//         console.log("options frá options " + options);
//         return {options};
//     };


const mapStateToProps = state => {
    //ÞAÐ SEM VIRKAR FYRIR GETOPTIONS ER:
    //  const options = getOptions(state);, með selectoor þannig að hann sæki guessTheFlag
    // og reducer með Object assign
    // þá virkar filter líka

    let { filter } = state;
    console.log("hasdasd", filter);
    // console.log("filterinn er " + filter);
    
    let options = getFilteredOptions(state, filter)
    if( filter == "World") {
        options = getOptions(state)
    } 
    // const options = getOptions(state);

    // console.log("in props" + options);
    // let options = getFilteredOptions(state);
    // const options = getCountryOptionsByFilter(state, 'Europe');
    // options = options.filter(countries => countries.region === 'Europe');
    return { options };
};

    // function mapStateToProps(state, ownProps) {
    //     // state = {cats: [{id:1, name: "Maru"}, etc.]}
    //     return {
    //         countries: state.guessTheFlag.countries
    //     };
    // }


    //Kannski á þetta ekki að vera render aðferð þá?
    // render(){
    //     console.log(this.props.options);
    //     return(
    //         <div>
    //             <h2>Options</h2>
    //             <ul>
    //                 {this.props.options.map((option) => {
    //                     return <Option key={option.id} option={option}/>;
    //                 })}
    //             </ul>
    //         </div>
    //     );
    // }
// }

// Options.propTypes = {
//     //ensure that countries are contained in an array
//     countries: PropTypes.array.isRequired
// };

// Options.propTypes = {
//     countries: PropTypes.array.isRequired
// };

/*Only container components are connected to the store, that is if they're stateful
* A container component is aware of the application state
* It can pass state through to presentational components through props
* */
export default connect(mapStateToProps)(Options);

