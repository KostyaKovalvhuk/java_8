function join(array) {
  return array.join(","); 
}

const myArray = ["mango", "poly", "kiwi", "ajax"];
const resultat= join(myArray);
console.log(resultat); 

const cards = [  
  'Карточка-1',  
  'Карточка-2',  
  'Карточка-3',  
  'Карточка-4',  
  'Карточка-5',  
];  

cards.splice(2, 0, 'Карточка-6');  
console.log(cards);  


cards.splice(3, 1);  
console.log(cards);  

cards.push('Карточка-7');  

updateCard(cards, 2, "Карточка-3.1");
console.log(cards);  



