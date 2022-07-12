import React from 'react'
import './App.css';
import  Counter from './composents/Counter'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
     }
    }
    handleClickIncrease = () => {
      this.setState({ count: this.state.count + 1 })
    };

    handleClickDecrease = () => {
      this.setState({ count: this.state.count - 1 })
    };


    
   
    render () {

      return(
        <div>
         <Counter increment={this.handleClickIncrease} substract={this.handleClickDecrease} count={this.state.count}/> 
        </div>
        
      )
    }

    
}

export default App;
