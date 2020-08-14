import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Webcam from "react-webcam";
import Player from 'react-player'
import { ReactMic } from 'react-mic';

import Header from '../../components/authenticated/header'
import Avatar from '../../assets/avatar.gif'
import Still from '../../assets/still.jpg'
import mic from '../../assets/mic.svg'
import micd from '../../assets/micd.svg'

var rdata = [];
var i=0;
var j=0;
const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';


var n = 0;
export default class Train extends Component {
    constructor(props) {
        super(props);
      
    }
    state = {
        data: [],
        playing:false,
        loaded: false,
        duration: 0,
        start: false,
        vid: '',
        n: 0,
        record: false,
    };
    

    onTextCallback(text) {
        console.log('Text received:', text);
        this.setState({
          content: text,
          words: text.split(/\S+/g).length
        })
        console.log('State:', this.state);
      }
  
      

    
    
    getPatientLine(){
        let _url='http://127.0.0.1:4001/patient/'+this.state.n
        console.log(_url)
       this.setState({vid:_url})  
       this.setState({n:n}) 
       this.setState({loaded:true})
       this.setState({start:true})
    }
   
    
    componentDidMount(){
        this.getPatientLine()
       
    }
    startRecording = () => {
        this.setState({
          record: true
        });
      }
    
      stopRecording = () => {
        this.setState({
          record: false
        });
      }
    
      onData(recordedBlob) {
        console.log('chunk of real-time data is: ', recordedBlob);
      }
    
      onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob.blobURL);
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
                <div  style={{position: 'relative', paddingTop:'90vh', marginTop:'1vh'}}>
                 {!this.state.loaded &&
                 <div>Your training will begin shortly
                  
                 </div>
                 
                 }
                 
                 {this.state.loaded && this.state.start &&
                 <div>
                 <Player 
                 url={this.state.vid}
                 style={{position:'absolute', top:0, left:0, zIndex:2}}
                 playing={true}
                 width='100%'
                 height='100%'
                 onEnded={()=>{this.startRecording();this.setState({start:false});}}
                 />
                 
                 </div>
                  }
                  
                  <div style={{position:'absolute', zIndex:4, bottom:0,left:0, backgroundColor:"#FFF", width:'100vw'}}>
                  
                   
                        {!this.state.record &&
                         <button onClick={this.startRecording} type="button"  style={{backgroundColor:'transparent', border:'none', position:'absolute', zIndex:7, top:'30%', left:'50%'}}><img src={micd} style={{height:25, width:25}}></img></button>
                        }
                        {this.state.record &&
                         <button onClick={this.stopRecording} type="button" style={{backgroundColor:'transparent', border:'none', position:'absolute', zIndex:7, top:'30%', left:'50%'}}><img src={mic} style={{height:25, width:25}}></img></button>
                         }
                          <ReactMic
                       width={500}
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        strokeColor="teal"
                        backgroundColor="#fff"
                        mimeType="audio/mp3" />
                      </div>
                  {this.state.loaded &&
                  <div>
                  <img src={Still} style={{position:'absolute',top:0, left:0, zIndex:1, width:'auto', height:'90vh',marginLeft:'9%'}} onClick={()=>{n++;this.setState({n:n});this.getPatientLine()}}></img>   
                  
                  <Webcam
                  mirrored
                style={{position:'absolute', top:'2%', left:'10%', height:'30vh', zIndex:2}}
                />
                </div>
                }
                  
            </div>
                
         
            </div>
        )
    }
}
}