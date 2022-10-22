import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddCounterAction, MinusCounterAction } from '../Store/Actions/Counter';

const Home = () => {
    let [counter,setCounter] =useState(0);

    const dispatch = useDispatch();
    const {selector} =useSelector((state)=>state.addCounterReducer);
    // console.log(selector);
    const plusCounter  =()=>{
      setCounter(++counter)
      dispatch(AddCounterAction());
    }
    const minusCounter  =()=>{
      setCounter(--counter)
      dispatch(MinusCounterAction());

    }
    const ClearAll =()=>{
      setCounter(counter=0)
    }
  return (
  <section className='MainContainer'>
  <div className='CounterValue'>
    <h2 className='CounterName'>Counter App</h2>
    <h1>{counter}</h1>

    <div className='ButtonSection'>
         <button onClick={plusCounter} className='Button'>+</button>
         <button onClick={minusCounter}className='Button'>-</button>
 
         <button onClick={ClearAll}className='Button'>C</button>
    </div>
  </div>
    </section>
    )
}

export default Home;