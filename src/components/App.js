import React, {Component} from 'react';
import CharacterList from './characterlist';
import HeroList from './herolist.js';
import '../styles/index.css';
import SquadStats from './squadstats';
const white = "#ffffff " ; 

export default class App extends Component {
    render(){
        return(
            <div className="App">
                <h2 style= {{color:white}}><b>SUPERSQUAD</b></h2>
                <br/>
                <div className="col-md-4">
                <CharacterList/>
                 </div>
                 <br/>
                <div className="offset-md-8">
                <HeroList/>
                <br/>
                </div>
                <br/>
                <div className="col-md-15">
                <SquadStats/>
                </div>
            </div>
        
            
        )
    }
}