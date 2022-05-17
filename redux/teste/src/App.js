import React from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addOne, fetchCategories, minusOne } from "./redux/actions";

class App extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

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
  minusOne: (state) => dispatch(minusOne(state)),
  fetch: (categories) => dispatch(fetchCategories(categories)),
  //aqui no fetch eu alterei de state para categories no parametro da função só para ficar mais de acordo com o que
  //estamos fazendo, ja que é uma requisição para pegar uma categoria, colocamos o nome do parametro de categoria;
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);
