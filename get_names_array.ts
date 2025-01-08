// Get array of names from given data:
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    },
];
//
let namesArray: string[] = [];

users.forEach((user) => {
    console.log(user)
    namesArray.push(user.name)
})

console.log(namesArray)
