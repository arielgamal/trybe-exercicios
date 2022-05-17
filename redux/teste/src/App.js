import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addOne, minusOne } from "./redux/actions";

class App extends React.Component {
  render() {
    const { counter, addOne, minusOne } = this.props;
    return (
      <div>
        <p>Counter: { counter }</p>  
        <button type="button" onClick={ () => addOne(1) }>Click to Plus</button>
        <button type='button' onClick={ () => minusOne(1) }>Click to minus</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  counter: store.counterReducer.contador});

const mapDispatchToProps = (dispatch) => ({
  addOne: (state) => dispatch(addOne(state)),
  minusOne: (state) => dispatch(minusOne(state))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);
