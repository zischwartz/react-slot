
import React from 'react';

require("./style.css")

let possible_chars = ['☃️', '🌤', '🌈']

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {balance: 100, current_spin: possible_chars}
    this.spin = this.spin.bind(this)
  }
  spin(){
    let new_balance = this.state.balance-5
    this.setState({'current_spin':[false, false, false], balance: new_balance})
    setTimeout( ()=> {
      let result = pick_three(possible_chars)
      let balance = this.state.balance
      if (result[0]==result[1] && result[1]==result[2]){
        balance +=50
      }
      this.setState({'current_spin':result, balance: balance})
    }, 2500)
  }
  render(){
    return(
    <div>
      <nav>
        You have <code>${this.state.balance}</code>
        <button onClick={this.spin}>Spin!</button></nav>
        <Slot outcome={this.state.current_spin[0]}/>
        <Slot outcome={this.state.current_spin[1]}/>
        <Slot outcome={this.state.current_spin[2]}/>
    </div>)
  }
}



class Slot extends React.Component {
  render(){
    let inner = !this.props.outcome ? <div className="indicator"></div> : <div className="outcome">{this.props.outcome}</div>
    return ( <div className="slot"> {inner} </div>)

  }
}


function pick_three(pos){
  let res = []
  res.push (pos[Math.floor(pos.length*Math.random())] )
  res.push (pos[Math.floor(pos.length*Math.random())] )
  res.push (pos[Math.floor(pos.length*Math.random())] )
  return res
}

export default App
