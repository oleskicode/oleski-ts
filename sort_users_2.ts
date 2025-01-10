// Get an array of names from the given array of users
// Get back only active users
// Sort users by age in descending order

const users2 = [
    { id: 1, name: "Jack", isActive: true, age: 20 },
    { id: 2, name: "John", isActive: true, age: 18 },
    { id: 3, name: "Mike", isActive: false, age: 30 },
];

// Get an array of names from the given array of users
let namesArray2: string [] = []
namesArray2 = users2.map((user) => user.name)
console.log(namesArray2)

// Get back only active users
let activeUsers2 = []
users2.forEach((user) => {
  if (user.isActive === true) {
    activeUsers2.push(user)
  }
})
console.log(activeUsers2)

// Sort users by age in descending order
const users2SortedDesc = users2.sort((a,b) => b.age - a.age)
console.log(users2SortedDesc) //desc
