import React from 'react'


class Counter extends React.Component {
      
    render() {  
   
        return (
  
      <>
  <div className="container">
    <h1 className="text-center p-5">Counter</h1>
     <div className="d-flex justify-content-around">
      <button className="btn btn-outline-danger" onClick={this.props.substract} >+</button>
      <span className="col-2">{this.props.count}</span>
      <button className="btn btn-outline-success" onClick={this.props.increment}>-</button>
    </div>
  </div>

      </>
    )
  }
}
export default Counter;