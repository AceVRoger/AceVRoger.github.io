// Character-Based RPG

// Public Interface: how users of the class interact with the class
// - Constructor
// - Public methods
// - Getters and Setters

// Principle #1 of OOP: Encapsulation
// We (the class designer) are going to control the in's and out's of our class attributes via public interface

// Making attributes private with #

// static variables and methods: static stuff is shared amoungst all instances of a class

// method that does its own work regardless of...

class Character {
    static count = 0;

    // Attributes (Properties)
    #hp;        // private
    #role;      // private

    // Constructor: how the user of the class creates a new object. AKA Instance
    constructor(name, hp=20, strength=100) {
        this.name = name;
        this.#hp = hp;
        this.strength = strength;
        this.defence = 100;
        this.itemInventory = [];
        this.gold = 0;

       Character.count++;
    }

    // Methods (Behaviors)
    toString() {
        return this.name + '(' + 'HP:' + this.#hp + ')';
    }

    greet() {
        console.log('Hello');
    }

    attack(enemy) {
        console.log(this.name + ' attacks ' + enemy.name);
    }

    addToInventory(item) {
        this.itemInventory.push(item);
    }

    get hp() {
        return this.#hp;
    }

    set hp(value) {
        if (value < 0)
            this.#hp = 0;
        else
            this.#hp = value;
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        const validRole = ['knight', 'mage', 'theif'];

        if (validRole.includes(role.toLowerCase())) {
            this.#role = role;
            return;
        }

        throw new Error('Invalid Role! Must be: Knight, Mage, Theif');

    }

    takeDamage(amount) {
        this.#hp -= amount;
        if (this.#hp < 0)
            this.#hp = 0
    }

    // No this? May be a static method
    // Point: may provide some sort of utility or helper that belongs to the class
    // Becasuse they share...
    static generateName() {
        const names = ['Adela', 'Everhart', 'Floris', 'Joe', 'Margarette'];
        return names[Math.floor(Math.random() * names.length)];
    }
}

artimus = new Character('Artimus', 20, 300)
elsa = new Character('Elsa')
artimus.attack(elsa);
elsa.attack(artimus);

console.log('Daily Log: ' + artimus)

artimus.role = 'knight';
console.log(artimus.role);

artimus.addToInventory('Sword')
console.log(artimus);

artimus.greet();

console.log('Artimus HP:', artimus.hp)
console.log('Artimus takes 1000 damage!')
artimus.hp -= 1000;
console.log('Artimus HP:', artimus.hp);

skeleton = new Character('Skeleton');
randomCharacter = new Character(Character.generateName())
console.log('' + randomCharacter);

console.log(Character.count)














//// Review of JS objects
//character1 = {
//    name: 'bob',
//    hp: 20,
//    strength: 100
//};
//
//character2 = {
//    name: 'fred',
//    hp: 20,
//    strength: 100,
//    defense: 100
//};
//
//console.log(character1);
//console.log(character2);
//// Issues: may have mismatched attributes, no behaviors (i.e. attack etc.)
//
//// Object constructor functions (legacy)
//// Provides some degree of uniformity
//// Allowed for behaviors
//function CharacterOld(name, hp, strength) {
//    this.name = name;
//    this.hp = hp;
//    this.strength = strength;
//    this.greet = function() {console.log('Hello');}
//}
//
//character3 = new CharacterOld('Jacob', 25, 200);
//
//console.log(character3);
//character3.greet();
//
//// There's no control or protection over our data
//character3.hp -= 1000;
//console.log('Jacobs HP:', character3.hp);

// Enter Classes: Classes are the preferred modern way to work with objects
// Classes serve as a blueprint/ model for the object that can be used in our programs
// Classes are used to group properties (attributes) and behaviors (methods)
// Classes allow for proper data protection (encapsulation) and process hiding (abstraction).