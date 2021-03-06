import React, {Component} from "react";
import {Link} from 'react-router-dom';

import Header from '../../../components/unauthenticated/header';
import Login from '../../../components/unauthenticated/login';

import Bg from '../../../assets/bg.png';
import TraineeBg from '../../../assets/trainee.png';

export default class Trainee extends Component {
    render(){
        const header = {
            color: "white",
            backgroundColor: '#696969',
            padding:"20px",
            fontFamily: "Arial",
            height:"25px",
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
            
            <div>
            <Header></Header>    
            <div style={{backgroundColor:'#CCC', height:'93.25vh', backgroundImage:`url(${Bg})`, backgroundSize:'100% auto', backgroundRepeat:'no-repeat', fontFamily:'Lato'}}>
           <Login title={TraineeBg} name="Trainee"></Login>
            </div>
            </div>
        );
    }
    
}