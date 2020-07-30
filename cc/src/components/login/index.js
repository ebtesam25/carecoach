import React, {Component} from "react";
import {Link} from 'react-router-dom';

import CoachBg from '../../assets/coach.png';

export default class Login extends Component {
    render(){
        const modal = {
            color: "white",
            backgroundColor: '#fff',
            position: "absolute",
            width:'60vw',
            height:'60vh',
            zIndex:2,
            fontFamily: "Arial",
            height:"25px",
            fontFamily:'Lato',
            fontSize: 15,
            top:'25%',
            left:'20%',
            boxShadow: '3px #333'
          };
          const menu = {
              listStyleType: "none",
              color:"white",
              margin: "0",
              float: "left",
              marginBottom: "50px"
          }; 
        return(
            <div style={modal}>
                <div style={{float:'left'}}> 
                <img src={CoachBg} style={{height:'60vh', margin:'auto'}}></img>
                <div style={{height:'60vh',width:'36.6vw', margin:'auto',zIndex:3, position:'absolute',top:'0%',backgroundColor:'#333',opacity:'0.7'}}>
                    <div style={{fontFamily:'Roboto', fontSize:'40px', width:'40%', textAlign:'left', margin:'15% 10% 10% 10%'}}>Welcome to Care Coach</div> 
                    <div style={{fontFamily:'Lato', fontSize:'20px', width:'50%', textAlign:'left', margin:'0 0 0 10%'}}>Professional home for all those who are committed to improving communication and relationships in healthcare. Welcoming researchers, educators, clinicians, patients, patient advocates, and all members of the healthcare team.</div>
                    </div>
                    </div>
                    <div style={{float:'right', height:'60vh', backgroundColor:'#FFF', paddingLeft:'4.25%'}}>
                        <div style={{color:'#000', fontFamily:'Roboto', fontSize:'30px', marginRight:'10vw', marginTop:'10vh'}}>Login as Coach</div>
                        <div style={{fontSize:'20px'}}>
                        <form style={{color:'#000', textAlign:'left',marginTop:'5%'}}>
                        <label for="fname">Email ID:</label><br/>
                        <input style={{width:'70%', height:'30px'}} type="text" id="fname" name="fname"/><br/>
                        
                        <label for="lname">Password:</label><br/>
                        <input style={{width:'70%', height:'30px'}} type="text" id="lname" name="lname"/>
                        </form>
                        <div style={{fontSize:'15px', position:'relative', color:'#00c2cc', marginTop:'1%',textAlign:'left'}}>Forgot Password?</div>
                        <button style={{fontSize:18, backgroundColor:'#000', border:'none', padding:'2% 5%', color:'#fff', position:'relative',marginLeft:'-20%', marginTop:'10%'}}>Sign In</button>
                        <div style={{fontSize:'15px', position:'relative', color:'#00c2cc', marginTop:'1%',textAlign:'center', marginLeft:'-17.5%'}}>Sign Up or Register</div>
                        </div>
                    </div>
               
            </div>
        );
    }
    
}