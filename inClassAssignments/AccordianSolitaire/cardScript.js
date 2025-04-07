class Card {
    static idGen = 0;
    #cardId;
    #cardElement;

    constructor(suit, value) {
        // Internal working
        // These should be private... fix it later
        this.suit = suit;           // 0 = spades, 1 = hearts, 2 = diamonds, 3 = clubs
        this.value = value > 11 ? value + 1 : value;    //Increase after Jack to skip Knight

        // External working
        this.icon = 127136 + (suit * 16) + this.value;
        this.color = (suit === 0 || suit === 3) ? 'black' : 'red';

        // Will need an ID
        this.#cardId = Card.idGen++;

        // private "helper" method
        this.#makeCardElement();
    }

    #makeCardElement() {
        this.#cardElement = document.createElement('span');
        this.#cardElement.innerHTML = '&#' + this.icon + ';';
        this.#cardElement.setAttribute('style', 'color:' + this.color + ';');

        this.#cardElement.setAttribute('id', this.#cardId);
        this.#cardElement.setAttribute('data-value', this.value);
        this.#cardElement.setAttribute('data-suit', this.suit);
        this.#cardElement.setAttribute('draggable', 'true');

        this.#cardElement.style.cursor = 'pointer';

        // Next Time: implement drag and drop interface using OOP approach
    }

    get cardElement() {
        return this.#cardElement;
    }
}

let cardTable = document.getElementById('cardTable');

const deck = [];
for (let suit = 0; suit < 4; suit++)
    for (let value = 1; value < 14; value++)
        deck.push(new Card(suit, value));

// Shuffle
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}

function dealCard() {
    let card = deck.pop();
    if (card)
        cardTable.appendChild(card.cardElement);
}