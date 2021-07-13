class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Ninja's name is: ${this.name}`);
    }

    showStats() {
        console.log(`Nija's name is: ${this.name}`);
        console.log(`Nija's health is: ${this.health}`);
        console.log(`Nija's speed is: ${this.speed}`);
        console.log(`Nija's strength is: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.drinkSake();
// ninja1.showStats();

