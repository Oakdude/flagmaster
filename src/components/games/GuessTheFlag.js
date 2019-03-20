import React from 'react'
import { Link } from 'react-router-dom'
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function fetchData() {
    var url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
        .then(processResponse)
        .then(data => {
            for (let country of data){
                console.log(country.name, country.flag)
            }
        })
    }
function processResponse(response) {
    if (response.ok) {
        return response.json();
    }
    console.log(response);
    throw response;
    }

const GuessTheFlag = () => {
    return (
            <div className="container">
                <h3>Guess the Flag!</h3>
                                
            </div>
    )
}
fetchData();
export default GuessTheFlag;