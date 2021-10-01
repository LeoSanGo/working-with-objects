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
