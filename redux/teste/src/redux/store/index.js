import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

//no codigo abaixo quando eu dei push ele nao tava usando o rootreducer, coloquei para ele usar, mas acho que o 
//codigo no seu pc está correto ja;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;