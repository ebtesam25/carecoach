import React, { Component } from 'react';
import logo from '../../assets/admin.png'
import './speech.css';

import ReactSpeech from './lib'

class Speech extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: '',
      words: 0,
      lang: 'us-US'
    };
    this.onTextCallback = this.onTextCallback.bind(this)
    this.changeLang = this.changeLang.bind(this)
  }

  changeLang(event) {
    console.log('Changing lang:', event.target.value);
    this.setState({
      lang: event.target.value
    });
  }

  onTextCallback(text) {
    console.log('Text received:', text);
    this.setState({
      content: text,
      words: text.split(/\S+/g).length
    })
    console.log('State:', this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container d-flex align-items-center">
            <img className="App-logo" src={logo} alt="react-speech" />
            <div className="App-name">
              <h1 className="App-title">react-speech</h1>
              <h2 className="App-subtitle">simple React component to deal with browser SpeechRecognition</h2>
            </div>
          </div>
        </header>
        <div className="container">

          <div className="section">
            <h3 className="section-title">How does it work?</h3>
            <p className="section-description lead">
              This component allow you to use the browser <strong>SpeechRecognition API</strong> within your <strong>React</strong> application.<br></br>
              To try press the microphone button and start speaking, you will see the capture text as soon as you speak appear in the box below.
            </p>
            <p className="section-description lead">
              You can customize the beheviour of the component with various options, that let you choose the language adopted for the SpeechRecognition and set a collection of SpeechGrammar objects that represent the grammars that will be understood by the current instance.
            </p>
            <p className="section-description lead">
              For detailed informations about the SpeechRecognition API you can visit the <a href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition">official</a> MDN page.
            </p>
            <p className="section-description">
              Language?
              <select className="custom-select ml-4" value={this.state.lang} onChange={this.changeLang}>
                <option value="it-IT">Italiano</option>
                <option value="us-US">English</option>
                <option value="de-DE">Deutsch</option>
              </select>
            </p>
          </div>

          <div className="d-flex justify-content-between mb-4">
            <span hidden={!this.state.content.length}>Total characters: {this.state.content.length}</span>
            <span hidden={!this.state.content.length}>Total words: {this.state.words}</span>
          </div>

          <div className="result-container">
            <p className="lead">{this.state.content}</p>
          </div>
        </div>

        <footer className="App-footer">
          <ReactSpeech lang={this.state.lang} onText={this.onTextCallback} />
        </footer>
      </div>
    );
  }
}

export default Speech;