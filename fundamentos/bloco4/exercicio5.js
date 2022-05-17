const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };

//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

 const array =  [
    [ 'França', obj = {name: 'oi', age: '30'} ],
    [ 'Brasil', obj = {name: 'oi', age: '30'} ],
    [ 'Espanha', obj = {name: 'oi', age: '30'} ],
    [ 'Portugal', obj = {name: 'oi', age: '30'} ]
  ]

    for(index in array) {
    console.log('--------');
    console.log('País:', array[index][0]);
    console.log('Capital:', array[index][1].name);
  };