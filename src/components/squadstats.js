import React from 'react';
import {connect} from 'react-redux';
const white = "#ffffff";

function mapStateToProps(state){
    return{
        heroes: state.heroes
    }
}

export class SquadStates extends React.Component {

    strength() {
        let strength = 0;
        this.props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }
     intelligence() {
         let intelligence = 0;
         this.props.heroes.forEach(hero => intelligence +=hero.intelligence);
         return intelligence;
     }

     speed(){
         let speed =0;
         this.props.heroes.forEach(hero => speed += hero.speed);
         return speed;
     }

    render(){
        return(
        <div>
        <h4 style= {{color:white}} ><b>SQUADSTATS</b></h4>
            <ul className="list-group">
                <li className="list-group-item">
                     <b>Overall Strength:</b>  {this.strength()}
                </li>
                <li className="list-group-item">
                    <b> Overall Intelligence:</b>  {this.intelligence()}
                </li>
                <li className = "list-group-item">
                    <b> Overall Speed:</b>  {this.speed()}
                </li>
            </ul>
        </div>
        )
    }
}

export default connect(mapStateToProps,null)(SquadStates);