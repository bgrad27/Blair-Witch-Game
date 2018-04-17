import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import scenes from './scenes.json'
// import ScaryMusic from './ScaryMusic.mp4'

class App extends Component {
  constructor() {
    super();

    this.state = {
      scene_num: 0,


    }
    //   this.audio = new Audio(ScaryMusic);
    // }
    // componentDidMount = () => {
    //   this.audio.play();
  }

  nextScene = (s) => {
    //in this function change scene_num in state to whatever gets passed in
    //then check if it works by clicking the buttons
    this.setState({ scene_num: s });
  }

  render() {
    return (
      <div className="App">


        <h1 className="App-title">The Blair Witch Experience</h1>


        <p>{this.state.name}</p>

        <p>{scenes[this.state.scene_num].text}</p>

        <img src={scenes[this.state.scene_num].image} width="300" height="300" />

        {scenes[this.state.scene_num].options.map((op, i) =>
          <div key={i}>
            <button onClick={() => this.nextScene(op.send_to)}>{op.text}</button>
            <br />
          </div>

        )}
        <script src='http://use.edgefonts.net/nosifer.js'></script>

        <br /><br /><br /><br />
      </div>
    );
  }
}

export default App;

