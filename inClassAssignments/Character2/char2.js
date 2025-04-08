// Solution: inheritance
// Base class (contains all the base behaviors), derived class (adds to it)
// (parent, child; base, subclass; superclass, subclass;)

// polymorphism: we can change the "shape" of our parent class
// Method overriding: subclass has the exact same method (different implementation) than superclass

// Next Time: introduce "protected" data files

class Character {
    #hp;

    constructor(name) {
        this.name = name;
        this.#hp = 20;
    }

    toString() {
        return `${this.name} (${this.#hp})`;
    }

    attack(enemy) {
        console.log(`${this.name} prepares to attack ${enemy.name}...`);
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
}

artimus = new Character("Artimus");
console.log(artimus + '');
artimus.attack(artimus);
//artimus.castSpell();      Can't cast spells due to not being a wizard

wizard = new Mage('Dark Wizard', 100);
console.log(wizard + '');
wizard.attack(artimus);
wizard.castSpell();