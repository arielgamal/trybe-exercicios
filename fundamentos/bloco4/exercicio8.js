const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// let addObjKey = (object, key, value) => {
//   object[key] = value
//   return object;
// }
// console.log(addObjKey(lesson2, 'turno', 'noite'));


// const listar = (objeto) => {
//   const a = Object.keys(objeto);
//   return a
// }
// console.log(listar(lesson2));

// const tamanho = (objeto) => {
//   const a = Object.keys(objeto);
//   return a.length
// }
// console.log(tamanho(lesson3))

// const listar2 = (objeto) => {
//   const b = Object.values(objeto);
//   return b
// }

// console.log(listar2(lesson2));

let allLessons = {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
}

// Object.assign(allLessons, lesson1, lesson2, lesson3);

// console.log(allLessons);

// const soma = (objeto) => {
//   return objeto.lesson1.numeroEstudantes + objeto.lesson2.numeroEstudantes + objeto.lesson3.numeroEstudantes;
// }

// console.log(soma(allLessons));

// const getValueByNumber = (lesson, index) => {
//   return Object.values(lesson)[index];
// }
// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'

const verifyPair = (objeto, chave, valor) => {
  const array = Object.entries(objeto);
  console.log(array);
  for (let index in array) {
    if (array[index][0] === chave && array[index][1] === valor) {
      return true;
    }
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));