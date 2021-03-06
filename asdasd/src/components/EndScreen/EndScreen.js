import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import "../css/style.css"
import "../css/placeTheFlag.css"
import logo from "../navbar/images/logo-white.png"
import nameitflag from "../images/nameflagimg.jpg"
import placeitflag from "../images/placeflagimg.jpg"
import * as firebase from 'firebase';

class EndScreen extends Component {
  constructor(props) {
      super(props);
  
      // we put on state the properties we want to use and modify in the component
      this.state = {
          score: sessionStorage.getItem("score")
          
      };

    }


    writeUserData(game, region, name, score, time) {
      const database = firebase.database();
      let ref = database.ref().child(game).child(region);
      ref.push().set({
        name: name,
        score: score,
        time: time
      });
    }

    
  render() {

    
  
    return (
      <React.Fragment>


            <div className="container main">
            <div className="col-sm-12 col-md-12 col-lg-12">

                <div id="TestieHelp2"><h1>Game Complete</h1></div>
                  <div id="game2div">
                  <div className='row returnButton'>
                      <div className="col-md-3">
                          <Link to='/'>
                          <button type="button" className="btn btn-danger">Main Menu</button>
                          </Link>
                      </div>
                      </div>
                <div id="TestieHelp2"><h1>Score: {this.state.score}/10</h1><h1>Time: 02:20</h1></div>

                <div id="TestieHelp">
                <h1>Insert name below</h1>
                <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <Link to='/Userscore'>
  <input type="submit" value="Submit" />
  </Link>

</form>

                </div>
                </div>
                </div>
            </div>

            </React.Fragment>
    )
  }
}

export default EndScreen;
