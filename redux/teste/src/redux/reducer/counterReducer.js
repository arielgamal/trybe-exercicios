const INITIAL_STATE = {
  contador: 0,
}

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PLUS_ONE':
      return {
        ...state,
        contador: state.contador === 10 ? 10 : state.contador + action.value,
      };
    case 'MINUS_ONE':
      return {
        ...state,
        contador: state.contador === 0 ? 0 : state.contador - action.value,
      }
    default:
      return state;
  }
}

export default counterReducer;