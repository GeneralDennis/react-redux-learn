import React from 'react'
import { connect } from 'react-redux'
// import { increment, decrement, reset } from '../counter.actions'
import * as counterActions from '../counter/counter.actions'

// const Counter = ({ counter, incr, decr, res }) => {
const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div>
      {/* <button onClick={decr}>-</button>
      <span onClick={res}>{counter}</span>
      <button onClick={incr}>+</button> */}
      <button onClick={decrement}>-</button>
      <span onClick={reset}>{counter}</span>
      <button onClick={increment}>+</button>

    </div>
  )
}

const mapState = state => {
  return {
    counter: state.counter
  }
}

// const mapDispatch = dispatch => {
//   return {
//     incr: () => dispatch(increment()),
//     decr: () => dispatch(decrement()),
//     res: () => dispatch(reset()),
//   }
// }

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset
}

const connector = connect(mapState, mapDispatch);

export default connector(Counter);