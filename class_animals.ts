class Animal {
    name: string;
    predator: boolean;

    constructor(name: string, predator: boolean) {
        this.name = name;
        this.predator = predator;
    }

    static isPredator(animal: Animal) {
        if (animal.predator) {
            console.log(`${animal.name} IS a predator`)
        } else {
            console.log(`${animal.name} is NOT a predator`)
        }
    }

    logAnimalInfo() {
        console.log(`Animal name: ${this.name}`);
        console.log(`Predator? : ` + this.predator);
    }
}

const animal1 = new Animal("fish", true)
const animal2 = new Animal("rabbit", false)

animal1.logAnimalInfo()
Animal.isPredator(animal1)

animal2.logAnimalInfo()
Animal.isPredator(animal2)
