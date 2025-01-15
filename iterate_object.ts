const person = {
    name: "Alice",
    age: 25,
    job: "Engineer",
    isStudent: false
};

// 1. for const key in person
for(const key in person) {
    console.log(`${key} : ${person[key]}`)
}

// 2. using Object.keys(person).forEach( (key) => {})
Object.keys(person).forEach( (key) => {
    console.log(key + " : " + person[key])
})