const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    //"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, 
    //R. Rua das Flores, Nº: 389, AP: 701".
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para:
     ${order['name']}, telefone: ${order.phoneNumber}, ${order.address.street},
     Numero: ${order.address.number}, AP: ${order['address']['apartment']}`)
    
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
   //"Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
    let novoHomem = 'Luiz Silva'
    order.name = novoHomem;
    let novoValor = 50
    order.order.payment = novoValor;
    console.log(`Olá ${order.name}, o total do seu pedido de marguerita, peperoni e Coca-cola
    zer é ${order.order.payment}.`)
  }
  
  orderModifier(order);