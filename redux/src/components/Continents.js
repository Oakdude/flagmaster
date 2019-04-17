import React from 'react';
import { connect } from "react-redux";
import { setRegionFilter } from '../actions';

/*
* Component lets us choose a continent, the game will be loaded with
* relevant
* */

//
// function handleRegionClick(region){
//     // console.log("chosen region is: " + region);
// }

//Kannski ætti þetta að tengjast storinu?

const regions= ['Europe', 'World', 'Asia', 'Ocenia', 'Americas', 'Africa'];

const Continents = ({ activeFilter, setRegionFilter }) => {
    return(
        <div>
            Pick a region
            <ul>
                {regions.map((region) => {
                    return <li
                        onClick={() => {
                            setRegionFilter(region)
                        }}
                        key={region}>{region}
                    </li>
                })}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter : state.regionFilter };
};


export default connect(
    mapStateToProps,
    {setRegionFilter}
    )(Continents);