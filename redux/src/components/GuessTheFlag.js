import React, {PropTypes} from "react";
import Options from './Options';
import Flag from './Flag';
import { connect } from "react-redux";
import store from '../store';
import Continents from './Continents';

// import {getOptions, getFlag} from "../apis/staticApi";


/*
* This component holds the whole gameplay for Guess the flag
* Here you can very clearly see in the constructor how the UI state is kept separate
* from the store state by looking at the state in re constructor.
* It makes it easier to follow what's going on and keep the UI state
* cleaner and removes some the high coupling. This is another main feature of redux.
* */
class GuessTheFlag extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            flag:'NO FLAG',
            regions: ['Europe', 'World', 'Asia', 'Ocenia', 'Americas', 'Africa'],
            chosenRegion: 'None'
        };
    }

    //HÉR ÞARF VÆNTANLEGA AÐ CONTINENT PICKER
    //ath, continent er kallað regions

    /*
    * Í todolistanum er ekkert render fall í þessum topp klasa
    * */
    handleFlagClick = () => {
        // const flag = getFlag();
        // console.log(flag);
        // this.setState({flag : flag});
        // console.log(this.state.flag);
        //Virðist virka rétt hér
        // console.log("test, chosen region is: " + this.state.chosenRegion);
        console.log("STATE: ");
        console.log(store.getState());
        this.setFlagArray();
    };

    setFlagArray(){

    let array1 = [];
    for(var i = 0; i < 10; i++){
        var x = Math.floor(Math.random()*249) + 1;
        if(array1.indexOf(x) === -1) array1.push(x);

    }
    console.log("hej", array1);

    //console.log("tja", store.getState().guessTheFlag[array1[0]]); 
    let tenCountries = [];
    for(var i = 0; i < 10; i++){
        tenCountries.push(store.getState().guessTheFlag[array1[i]]); 
    
    }

    console.log(tenCountries);

}

    handleOptionClick= () =>{

        // const options = getOptions();
        // const flag = getOptions();
        // this.setState({
        //     options: options
        // });

    };

    getOptionsByRegion(){
        // return options;
    }

    // handleRegionClick = (region) => {
    // //     // console.log("chosen region is: " + this.state.chosenRegion);
    //     this.setState({
    //         chosenRegion:region
    //     });
    //     console.log("callback, chosen region is: " + this.state.chosenRegion);
    //     console.log("chosen region is: " + region);
    //
    //     this.setState({
    //         options: this.getOptionsByRegion()
    //     })
    //
    //
    // };

    // GuessTheFlag.proptypes = {
    //
    // };


    //kannski er betra að sækja rétt api köll hér og senda niður filteraðan lista?
    //ég er eiginlega alveg viss um að það er best að senda listann niður héðan
    //Rendera fyrst valmöguleikanum
    //ég þarf í rauninni héðan að senda fjóra strípaða valmöguleika niður
    //því ég vil vita á þessum panel hvaða fána ég á að nota
    render() {

        
        return (
            <div>
                <h1>GUESS THE FLAG </h1>
                <Continents />
                {/*<div>*/}
                    {/*Pick a region*/}
                    {/*<ul>*/}
                        {/*{this.state.regions.map((region) => {*/}
                            {/*return <li onClick={this.handleRegionClick.bind(this, region)} >{region}</li>*/}
                        {/*})}*/}
                    {/*</ul>*/}
                {/*</div>*/}
                {/*<div onClick={this.handleOptionClick}>Press to get Options</div>*/}
                <div onClick={this.handleFlagClick}>Press to get Flag</div>

                {/*<Flag flag={this.state.flag}/>*/}
                {/*<Options options={this.state.options}/>*/}
                {/*Gæti verið leið til þess að filter eftir regions,viljum ekki*/}
                {/*senda allan listan niður heldur kalla á rétt region eftir þörfum*/}
                {/*Í rauninni á ekki að loada þessu fyrr en region-ið er komið*/}
                {/*<Options region={this.state.countries}/>*/}
                <Options/>
            </div>
        );
    }
}



/*Connect function can be thought of what replaces the observer in the
* observer pattern or as a pub/sub patters. It subscribes to the redux store.
* I recommend reading up on it if interested.
* */
export default connect(
    null,
    null
)(GuessTheFlag);