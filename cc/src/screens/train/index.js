import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Webcam from "react-webcam";
import Player from 'react-player'
import { ReactMic } from '@cleandersonlobo/react-mic';
import * as lamejs from 'lamejs';


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
      wavToMp3(channels, sampleRate, samples, blob) {
        var buffer = blob;
        console.log(buffer)
        var mp3enc = new lamejs.Mp3Encoder(channels, sampleRate, 128);
        var remaining = samples.length;
        var samplesPerFrame = 1152;
        for (var i = 0; remaining >= samplesPerFrame; i += samplesPerFrame) {
            var mono = samples.subarray(i, i + samplesPerFrame);
            var mp3buf = mp3enc.encodeBuffer(mono);
            if (mp3buf.length > 0) {
                buffer.push(new Int8Array(mp3buf));
            }
            remaining -= samplesPerFrame;
        }
        var d = mp3enc.flush();
        if(d.length > 0){
            buffer.push(new Int8Array(d));
        }
    
        var mp3Blob = new Blob(buffer, {type: 'audio/mp3'});
        var bUrl = window.URL.createObjectURL(mp3Blob);
    
        // send the download link to the console
        console.log('mp3 download:', bUrl);
        
    }
    sendAudioFile(file) {
        console.log("jere")
        
         
        
      }


      downloadBlob(blob, name) {
          console.log("WTFFFFF")
        // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
        const blobUrl = URL.createObjectURL(blob);
      
        // Create a link element
        const link = document.createElement("a");
      
        // Set link's href to point to the Blob URL
        link.href = blobUrl;
        link.download = name;
      
        // Append link to the body
        document.body.appendChild(link);
      
        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent('click', { 
            bubbles: true, 
            cancelable: true, 
            view: window 
          })
        );
      
        // Remove link from body
        document.body.removeChild(link);
      }
      
    
     async onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
        const formData = new FormData();
        var file = new File([recordedBlob], "foo.mp3");
        formData.append('body', recordedBlob);
        console.log(recordedBlob.toDataURL("audio/mp3"))
        await fetch('http://127.0.0.1:4001/audio', {
            method: 'POST',
            body: formData,
            
          })
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error(error)
          })
        
        console.log("WTFFFFF")
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
         
                var url = recordedBlob.blobURL;
                a.href = url;
                a.download = 'music.mp3';
                a.click();
                window.URL.revokeObjectURL(url);
            
    
        


        
        
        
      }
      
      
   
  
    render(){
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props
        
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