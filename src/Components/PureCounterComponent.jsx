import React, { Component } from 'react'
import { PureComponent } from 'react'

export class PureCounterComponent extends PureComponent {
  constructor(){
    super()
    this.state = {
      count: 0,
      toggle: false
    }
  }

  ChangeToggle=()=>{
    this.setState({toggle: !this.state.toggle})
  }
  IncreaseCount = ()=>{
    if(this.state.toggle){
      this.setState({count: this.state.count + 1})
    }
  }

  render() {
    console.log('Pure Component');
    return (
      <div>
        <h1>Simple Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.ChangeToggle}>Set Toggle</button>
        <button onClick={this.IncreaseCount}>Counter</button>
      </div>
    )
  }
}

export default PureCounterComponent
