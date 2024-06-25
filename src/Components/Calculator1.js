import { FaBackspace, FaSquareRootAlt } from 'react-icons/fa'
import './calculator1.css'
import React, { useState } from 'react'
import { evaluate } from 'mathjs';
import { FaSquareFontAwesome } from 'react-icons/fa6';


function Calculator1() {
  const [values, setValues] = useState([]);
  const [result, setResult] = useState(0)

const handleClick = (event) => {
  if(values === result) {
    setValues([])
  }else{
    const newValue = event.target.getAttribute('value') || event.target.innerText;
    setValues((prevState) => [...prevState, newValue])
  }
}

const handleSquared =() => {
  // let expression = values.join('') || result
  
  try{
    // const result = evaluate(expression);
    const square = Math.pow(values.join('') || result, 2)
    // const squaredResult = evaluate(`${result} ^2`).toString();
    setResult(square)
    // setResult(squaredResult)
    setValues([])
  }
  catch (error) {
    alert('Invalid Expression')
    setValues([]);
  }
};

const handleClear = () => {
  setValues([]);
  setResult(0);
}

const handleDelete = () => {
  setValues(prevState => prevState.slice(0, -1))
}

const handleSqrt = () => {
  setResult(Math.sqrt(values.join('')))
  setValues([])
}

const handleEvaluate = () => {
  const expression = values.join('');
  try {
    setResult(evaluate(expression).toString())
    setValues([])
  } catch (error) {
    alert('Invalid Expression')
    setValues([])
  }
}
  
  return (
    <div className='calculator'>
    <div className='container'>
        <div className='display' >
            <input type='text'className='display' value={result} />
        </div>
        <div className=' display' >
            <input type='text'className='display' value={values.join('')} />
        </div>
        <div className='btn-container'>
            <div className='btn e' onClick ={handleClear}>CE</div>
            <div className='btn e' onClick ={handleSquared}><p>X<sup>2</sup></p></div>
            <div className='btn e' onClick ={handleSqrt} ><FaSquareRootAlt /></div>
            <div className='btn e' onClick ={handleDelete}><FaBackspace /></div>
            <div className='btn' onClick ={handleClick} value='7'>7</div>
            <div className='btn' onClick ={handleClick} value='8'>8</div>
            <div className='btn' onClick ={handleClick} value='9'>9</div>
            <div className='btn e' onClick ={handleClick} >/</div>
            <div className='btn' onClick ={handleClick} value='4'>4</div>
            <div className='btn' onClick ={handleClick}  value='5'>5</div>
            <div className='btn' onClick ={handleClick} value='6'>6</div>
            <div className='btn e' onClick ={handleClick}>*</div>
            <div className='btn' onClick ={handleClick} value='1'>1</div>
            <div className='btn' onClick ={handleClick} value='2'>2</div>
            <div className='btn' onClick ={handleClick} value='3'>3</div>
            <div className='btn e' onClick ={handleClick} value= '-'>-</div>
            <div className='btn' onClick ={handleClick} value='0'>0</div>
            <div className='btn e' onClick ={handleClick}>.</div>
            <div className='btn e' onClick ={handleClick}>+</div>
            <div className='btn e' onClick ={handleEvaluate}>=</div>
        </div>
      
    </div>
    </div>
  )
}

export default Calculator1
