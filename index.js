const person1 = {
  name: "John",
  age: 24,
  status: "resident",
};
const person2 = {
  name: "Azamat",
  age: 17,
  status: "tourist",
};

if (person2.age >= 18 && person2.status === "resident") {
  console.log("You are resident!");
} else {
  console.log("Next weekend you are going to trip!");
}
