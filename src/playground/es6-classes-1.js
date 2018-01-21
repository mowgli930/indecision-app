class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi que cáncer ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        if(this.hasMajor())
            return `${this.name} is a ${this.age} year old ${this.major} student`;
        else
            return `${this.name} is a ${this.age} year old student without a major`;
    }
}

class Traveler extends Person {

    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.homeLocation)
            description +=  ` He's visiting from ${this.homeLocation}`;

        return description;
    }
}

const me = new Student('Rodrigo Morales Vega', 24, 'Java');
console.log(me.getDescription());
console.log(me.hasMajor());
const dude = new Student();
console.log(dude.getDescription());
const guido = new Traveler('Guido bettinelli', 24, 'Milano');
console.log(guido.getDescription());
const notGuido = new Traveler('Guido bettinelli2', 24);
console.log(notGuido.getDescription());
