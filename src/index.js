const obj = {
  person: {
    name: "Luis",
    age: 26
  },
  role: {
    name: "programmer",
    company: "AGAGT"
  }
};

console.log(obj);

const change = "name";

obj.person[change] = "Alves";

console.log(obj.person.name);
//---------------------------------------
//Spread test
let dontChangeMe = ["Apples", "Peaches", "Detergent", "Flowers"];
let meNeither = ["A shiny red polo", "coffee", "milk"];
let shoppingList = [...dontChangeMe, "diapers", ...meNeither.slice(1)];
console.table(dontChangeMe, meNeither, shoppingList);
