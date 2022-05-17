const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

const objeto = (objeto, chave, valor) => {
    objeto[chave] = valor
    return objeto;
};

console.log(objeto(customer, 'cidade', 'rio de janeiro'));