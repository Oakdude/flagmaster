import React, {Component} from 'react'
import "../css/style.css"
import "../css/placeTheFlag.css"
import MapsTest from '../continentMaps/mapsTest'
import {Link} from "react-router-dom"
import FetchACountryFlag from './FetchACountryFlag'
import Timer from "react-compound-timer"

class PlaceTheFlagGame extends Component {
    constructor(props) {
        super(props);
    
        // we put on state the properties we want to use and modify in the component
        this.state = {
            score: 0,
            count: 0,
            state: "LOADING",
            continent: this.props.match.params.continent
        };

      }

render() {
    return (
        <div className="container main">

            <div className='row returnButtonGame'>
                <div className="col-md-3">
                    <Link to='/'>
                    <button type="button" className="btn btn-danger">Exit</button>
                    </Link>
                </div>
                  </div>
                <div id="game2div">
                <div id="gameTimer">

                <Timer formatValue={(value) => `${(value < 10 ? `${value}` : value)} `}>

                    <Timer.Minutes formatValue={(value) => `${(value < 10 ? `0${value}` : value)}:`}/>
                    <Timer.Seconds formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`} />

                </Timer></div>
                <div className="progress">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="10"
                    aria-valuemin="10" aria-valuemax="100">
                    1/10
                    </div>
                </div>
                <FetchACountryFlag />
                <MapsTest />


            </div>


        </div>
    )
}}

export default PlaceTheFlagGame;
