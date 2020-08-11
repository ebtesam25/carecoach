import React, {Component} from "react";
import {Link} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Webcam from "react-webcam";
import GifPlayer from 'react-gif-player';

import Header from '../../components/authenticated/header'
import Avatar from '../../assets/avatar.gif'
import Still from '../../assets/still.jpg'
import Track from '../../TTSOutput.wav'

var rdata = [];
var i=0;
      var j=0;
export default class Train extends Component {
    state = {
        data: [],
        playing:false,
        loaded: false,
        duration: 0,
        curTime : new Date().getMilliseconds()
    };
    
   
    
    componentDidMount(){
        fetch('http://127.0.0.1:4000/teapot').
        then(response => response.json())
          .then(data => {
                
                rdata = data.silence
                this.setState({data:data.silence}); 
                
                this.setState({duration:data.dur})
                this.setState({loaded:true});
            
          }).then(()=>{
            var start = new Date().getTime(),
            time = 0,
            elapsed = 0.0;
            setTimeout(instance=>{
              time += 100;

              elapsed = Math.floor(time);
              if(Math.round(elapsed) == elapsed) { elapsed += 0; }
              console.log(elapsed)
              i = elapsed;
            if(elapsed==rdata[j][0]){
                this.setState({playing:false});
      
            }
            else if(elapsed==rdata[j][1]){
              console.log("Play")
                this.setState({playing:true});
                j=j++;
      
            }

              var diff = (new Date().getTime() - start) - time;
              setTimeout(instance, (100 - diff));
            }, this.state.duration*100);
            
                
            }
          )
            
          .catch(err=>console.log(err));
          console.log("set");
         
          
        }
       
       
        
          
    

        
    
   
  
    render(){
        
        if(!this.state.loaded){
            return(
              <div >
                  Loading...
                </div>
        
            );
          }
          else if (this.state.loaded) {
              
     
        return(
            
            <div>
                <Header/>
                {this.state.playing &&
               <img src={Avatar}  style={{position:'absolute', marginTop:'10%',marginLeft:'-50%',height:'50vh'}} ></img>
                }
                 {!this.state.playing &&
               <img src={Still}  style={{position:'absolute', marginTop:'10%',marginLeft:'-50%',height:'50vh'}} ></img>
                  }
             { /*  <GifPlayer 
                gif={Avatar} 
                still={Still} 
                style={{position:'absolute', marginTop:'10%',marginLeft:'-50%',height:'50vh'}} 
                autoplay
                pauseRef={playing => this.pauseGif = playing}
                onTogglePlay={playing => this.setState({ playing })}/>
                <button
                style={{ fontSize: 30 }}
                disabled={!this.state.playing}
             ></button>*/}
                <button style={{alignSelf:'center'}}>Start Training</button>
                {this.state.loaded &&
                <ReactAudioPlayer
                src={Track}
                controls
                autoPlay
                style={{position:'absolute', marginTop:'30%', marginLeft:'-45%',}}
                />
          }
                <Webcam
                style={{position:'absolute', marginTop:'10%', marginLeft:'-15%', height:'50vh'}}
                />
         
            </div>
        )
    }
}
}