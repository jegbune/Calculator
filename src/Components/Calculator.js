import React, { Component } from 'react'
import './Calculator.css'
class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:''
    }
  }
  inputvalue = (event) => {
    this.setState( prevState =>(
            {value: prevState.value + event.target.value})
    )}
  
  delValue =(event) =>{
    this.setState(prevState=> (
      {value: prevState.value.slice(0,-1)}
    )
    )
  }

clearValue= (event)=> {
  this.setState({
    value: ''
  })
}

result = (event) => {
  this.setState(prevState=> ({
    value: eval(prevState.value)
  }))
}

  render() {
    const { value } = this.state
    return (
      <div className='container'>
        <div className='calculator'>
          <form action=''>

            <div className='display'>
            <input type='text' value={this.state.value}/>
            </div>

            <div className='button'>
              <input type='button' value="AC" onClick={this.clearValue}/>
              <input type='button' value="/" onClick={this.inputvalue} />
              <input type='button' value="*" onClick={this.inputvalue} />
              <input type='button' value="DEL" onClick={this.delValue} />
            </div>

            <div className='button'>
              <input type='button' value="7" onClick={this.inputvalue} />
              <input type='button' value="8" onClick={this.inputvalue} />
              <input type='button' value="9" onClick={this.inputvalue} />
              <input type='button' value="-" onClick={this.inputvalue} />
            </div>

            <div className='button'>
              <input type='button' value="4" onClick={this.inputvalue} />
              <input type='button' value="5" onClick={this.inputvalue} />
              <input type='button' value="6" onClick={this.inputvalue} />
              <input type='button' value="+" onClick={this.inputvalue} />
            </div>

            <div className='button1'>
              <div className='sec1'>
              <input type='button' value="1" onClick={this.inputvalue} />
              <input type='button' value="2" onClick={this.inputvalue} />
              <input type='button' value="3" onClick={this.inputvalue} /> 
              <input type='button' value="00" onClick={this.inputvalue} />
              <input type='button' value="0" onClick={this.inputvalue} />
              <input type='button' value="." onClick={this.inputvalue} />
              </div>
             <div className='sec2'>
              <input type='button' value="=" className='equal' onClick={this.result} />
             </div> 
            </div>

            {/* <div className='button'>
              <input type='button' value="00" />
              <input type='button' value="0" />
              <input type='button' value="." />
              
            </div> */}
            
          </form>          
        </div>
      </div>
    )
  }
}

export default Calculator
