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
// Get array of names - using forEach()
const namesArray: string[] = [];
users.forEach((user) => {
    // console.log(user)
    namesArray.push(user.name)
})
console.log(namesArray)

// Get array of names - using map()
let mappedNames: string[] = [];
mappedNames = users.map((user) => user.name)
console.log(mappedNames)

// Get active users - filter
const activeUsers = users.filter((user) => user.isActive)
console.log(activeUsers)

// Get active users ids - filter + map
const activeUserIds = activeUsers.map((user) => user.id)
console.log(activeUserIds)
