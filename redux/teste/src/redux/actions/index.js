export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

// mudei as constantes acima, acredito que no código q a gente fez no seu pc elas estejam com os nomes e valores errados
// entao arrumei aqui e troquei no código abaixo os locais onde elas sao usadas para poder corrigir possivel bug;

const requestCategories = () => ({
  type: REQUEST_CATEGORIES
});

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());
    return fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((response) => response.json())
      .then((categories) => dispatch(receiveCategories(categories)));
    // na linha de cima (21), mudei de movies para categories, nao sei se voce fez isso, mas eu tive q fazer aqui entao resolvi
    // deixar uma observação tambem;
  };
}

export const addOne = (value) => ({ type: 'PLUS_ONE', value });
export const minusOne = (value) => ({ type: 'MINUS_ONE', value });
