import React, {Component} from "react";
import {Link} from 'react-router-dom';


export default class Header extends Component {
    render(){
        const header = {
            color: "white",
            backgroundColor: '#696969',
            padding:"20px",
            fontFamily: "Arial",
            height:"25px",
            fontFamily:'Lato',
            fontSize: 15,
          };
          const menu = {
              listStyleType: "none",
              color:"white",
              margin: "0",
              float: "left",
              marginBottom: "50px"
          };
          const items = {
              display:"inline",
              margin: "30px",
          };
          const menuR = {
            listStyleType: "none",
            color:"white",
            margin: "0",
            float: "right",
            marginRight:"30px",
        };
        return(
            <div style={header}>
                <ul style={menu} >
                <li style={items}><a style={{color:"#FFFF", textDecoration:'none'}} href="#">Home</a></li>
                <li style={items}><a style={{color:"#FFFF", textDecoration:'none'}} href="#">Trainings</a></li>
                <li style={items}><a style={{color:"#FFFF", textDecoration:'none'}} href="#">COVID Resources</a></li>
                </ul>
                <ul style={menuR} >
                <li style={items}><a style={{color:"#FFFF", textDecoration:'none'}} href="#">Login/Register</a></li>
                </ul>
            </div>
        );
    }
    
}