import { RECEIVE_CATEGORIES } from "../actions";

// importei esse código acima da action para poder passar no case sem ser uma string, isso nao 
// influencia no código nao, vc pode passar como string la no case tbm que funcionaria;

const INITIAL_STATE = {
  contador: 0,
  categories: [],
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
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      }
    default:
      return state;
  }
}

export default counterReducer;