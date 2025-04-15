// Solution: inheritance
// Base class (contains all the base behaviors), derived class (adds to it)
// (parent, child; base, subclass; superclass, subclass;)

// polymorphism: we can change the "shape" of our parent class
// Method overriding: subclass has the exact same method (different implementation) than superclass

// Next Time: introduce "protected" data files

class Material {
    constructor(name) {
        this.name = name;
    }
}

// Enumeration: limited set of values that can be used for comparison

const ItemType = Object.freeze({
    ATTACK: 0,
    DEFENSE: 1,
    MAGIC: 2
});

class Item {
    constructor(name, itemType, materialName=null) {

        if (!Object.values(ItemType).includes(itemType))
            throw new Error(itemType + ' is not a valid type. Expecting: ATTACK, DEFENSE, MAGIC');

        this.name = name;
        this.itemType = itemType;

        // Composition
        //this.material = new material(materialName);
    }
}

class Character {
    #hp;
    //#strength;

    constructor(name) {
        this.name = name;
        this.#hp = 20;
        this._strength = 25;    // "protected" attribute

        this.items = [];
    }

    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value > 100 ? 100 : value;
    }

    addItem(item) {
        if (item instanceof Item)
            this.items.push(item);
        else
            throw new Error(item + ' is not an instance of Item.');
    }

    toString() {
        return `${this.name} (${this.#hp})`;
    }

    attack(enemy) {
        if (enemy instanceof Character)
            console.log(`${this.name} prepares to attack ${enemy.name}...`);
        //else

    }

    get hp() {
        return this.#hp;
    }

    set hp(value) {
        this.#hp = value < 0 ? 0: value;
    }
}

// Inheritance example:
class Mage extends Character {
    constructor(name, magic) {
        super(name);
        this.magic = magic;
    }

    castSpell() {
        console.log(this.name + ' casts a spell with ' + this.magic + ' power!!!');
    }

    // Polymorphism: overrides parent method
    attack(enemy) {
        //console.log(`${this.name} casts a spell against ${enemy.name}...`);
        super.attack(enemy);
        console.log('... by casting a fire-ball spell!!!')
    }

    get strength() {
        return super.strength;
    }

    set strength(value) {
        super.strength = value > 50 ? 50 : value;
    }
}

class Healer {
    heal(character) {

    }
}

class Battle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }
}

artimus = new Character("Artimus");
console.log(artimus + '');
artimus.attack(artimus);
//artimus.castSpell();      Can't cast spells due to not being a wizard

artimus._strength = 500;
console.log('Artimus strength', artimus.strength);

wizard = new Mage('Dark Wizard', 100);
console.log(wizard + '');
wizard.attack(artimus);
wizard.castSpell();
wizard.strength = 500;
console.log('wizard strength', wizard.strength);

sword = new Item("sword", ItemType.ATTACK, "gold");
artimus.addItem(sword);
shield = new Item("Shield", ItemType.DEFENSE)
artimus.addItem(shield)

artimus.attack("Big Stick");

// Theoretical: class relationships
// Inheritance: one class "inherits" properties from another class
// Composition: one class that is "made up" of other classes; "tight-binding"
// Aggregation: one class "has" other classes as part of it; "loose-binding"
// Dependency: fleeting "temporary" relationship (ex: attack code)
// Association: classes exist separately, but instance "know" about each other for part of the program

// Last-Minute concepts:
// Enumerations
// Type-Checking