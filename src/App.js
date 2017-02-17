import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
export default App;

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  )
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <div className="counter-score">{props.score}</div>
      <button className="counter-action increment">+</button>
    </div>
  )
}
Counter.propTypes = {
  score: React.PropTypes.number.isRequired
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score}/>
      </div>
    </div>
  )
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
}


function App(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title}/>

      <div className="players">
        <Player name="Kel Kni" score="12"/>
        <Player name="Avery Langston" score="71"/>
      </div>
    </div>
  )
}


App.propTypes = {
  title: React.PropTypes.string
}

App.defaultProps = {
  title: "Scoreboard"
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
