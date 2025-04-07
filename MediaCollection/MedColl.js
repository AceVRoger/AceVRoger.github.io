const mediaData = [
    {"title": "FullMetal Alchemist Brotherhood", "author": "Hiromi Arakawa", "crunchyroll": "Free W/ ads","dvdPrice": 25.00, "image": "coverImgs/Fullmetal-Alchemist-Brotherhood-Title.jpg"},
    {"title": "One Piece", "author": "Eiichiro Oda", "crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/One-Piece-Title.jpg"},
    {"title": "Overlord", "author": "Kugane Maruyama","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/Overlord-Title.jpg"},
    {"title": "Fairy Tail", "author": "Hiro Mashima","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/FairyTail.jpg"},
    {"title": "Food Wars!", "author": "Yuuto Tsukuda","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/FoodWars.jpg"},
    {"title": "Kuroko's Basketball", "author": "Tadatoshi Fujimaki","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/KurokoBasketball.jpg"},
    {"title": "Haikyu!!", "author": "Haruichi Furudate","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/Haikyuu.jpg"},
    {"title": "Spy X Family", "author": "Tatsuya Endo","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/SpyFamily.jpg"},
    {"title": "Jujutsu Kaisen", "author": "Gege Akutami","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/JujutsuKaisen.jpg"},
    {"title": "Demon Slayer", "author": "Koyoharu Gotouge","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/DemonSlayer.jpg"},
    {"title": "Solo Leveling", "author": "Chu Gong","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/SoloLeveling.jpg"},
    {"title": "Skip Beat", "author": "Yoshiki Nakamura","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/SkipBeat.jpg"},
    {"title": "Hunter X Hunter", "author": "Yoshihiro Togashi","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/HunterHunter.png"},
    {"title": "Jobless Reincarnation", "author": "Rifujin na Magonote","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/MushokuTensei.jpg"},
    {"title": "Code Geass", "author": "Ichiroo Ookouchi","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/CodeGeass.jpg"},
    {"title": "7th Time loop", "author": "Touko Amekawa","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/7thTimeLoop.jpg"},
    {"title": "Barakamon", "author": "Satsuki Yoshino","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/Barakamon.jpg"},
    {"title": "World Trigger", "author": "Daisuke Ashihara","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/WorldTrigger.jpg"},
    {"title": "Magi", "author": "Shinobu Ohtaka","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/Magi.jpg"},
    {"title": "Shangri-La Frontier", "author": "Katarina","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/SLF.jpg"},
    {"title": "Fire Force", "author": "Atsushi Ohkubo","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/FireForce.jpg"},
    {"title": "Black Summoner", "author": "Doufu Mayoi","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/BlackSummoner.jpg"},
    {"title": "The Rising of the Shield Hero", "author": "Aneko Yusagi","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/ShieldHero.jpg"},
    {"title": "Vinland Saga", "author": "Makoto Yukimura","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/VinlandSaga.jpg"},
    {"title": "Chainsaw Man", "author": "Tatsuki Fujimoto","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/ChainsawMan.jpg"},
    {"title": "Kaiju No. 8", "author": "Naoya Matsumoto","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/KaijuNo8.jpg"},
    {"title": "Ace of Diamond", "author": "Yuji Terajima","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/AceOfDiamond.jpg"},
    {"title": "Kaguya-sama: Love is War", "author": "Aka Akasaka","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/KaguyaSama.jpg"},
    {"title": "My Hero Academia", "author": "Koohei Horikoshi","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/MyHeroAcademia.jpg"},
//    {"title": "Assassination Classroom", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Fate/Zero", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "The Apothecary Diaries", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Death Parade", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Toradora", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Reborn", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "The Wrong Way to Use Healing Magic", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Knights & Magic", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Sword Art Online", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Tokyo Revengers", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Those Snow White Notes", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Saga of Tanya the Evil", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Yu Yu Hakusho", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Attack on Titan", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "School Babysitters", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Mob Psycho 100", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Mashle: Magic and Muscles", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Megalobox", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Steins;Gate", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Guilty Crown", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "GTO - the Animation", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Erased", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Daily Lives of High School Boys", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Blend-S", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Dan Da Dan", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Naruto Shippuden", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Cowboy Bebop", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "The World's Finest Assassin Gets Reincarnated in Another World", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "That Time I Got Reincarnated as a Slime", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Tsukimichi", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"},
//    {"title": "Anohana", "author": "","crunchyroll": "Free W/ ads", "dvdPrice": 0.00, "image": "coverImgs/.jpg"}
// And more if time and desire comes around. (maybe during summer break?)
];


class Media {
    #title;
    #author;
    #crunchyroll;
    #dvdPrice;
    #image;

    constructor(title, author, crunchyroll, dvdPrice, image) {
        this.#title = title;
        this.#author = author;
        this.#crunchyroll = crunchyroll;
        this.#dvdPrice = dvdPrice;
        this.#image = image;
    }

    getTitle() {
        return this.#title;
    }

    setTitle(newTitle) {
        if (newTitle.trim().length > 0) {
            this.#title = newTitle;
        } else {
            console.error("Title can't be empty");
        }
    }

    getCrunchyroll() {
        return this.#crunchyroll;
    }

    setCrunchyroll(newCrunchyroll) {
        if (newCrunchyroll.trim().length > 0) {
            this.#crunchyroll = newCrunchyroll;
        } else {
            console.error("Can't find Crunchyroll.");
        }
    }

    getDvdPrice() {
        return this.#dvdPrice;
    }

    setDvdPrice(newDvdPrice) {
        if (typeof newDvdPrice === 'number' && newDvdPrice >= 0) {
            this.#dvdPrice = newDvdPrice;
        } else {
            console.error("DVD Prices can't be negative");
        }
    }

    getAuthor() {
        return this.#author;
    }

    setAuthor(newAuthor) {
        if (newAuthor.trim().length > 0) {
            this.#author = newAuthor;
        } else {
            console.error("Authors name can't be empty");
        }
    }

    getImage() {
        return this.#image;
    }

    toString() {
        return `${this.#title} by ${this.#author} - $${this.#dvdPrice}`;
    }

    generateHTML() {
        const mediaElement = document.createElement("div");
        mediaElement.classList.add("mediaItem");

        // left side: image
        const img = document.createElement("img");
        img.src = this.#image;
        img.alt = this.#title;
        img.classList.add("media-image");

        // Right Side: Information (title, author, price, crunchyroll)
        const infoElement = document.createElement("div");
        infoElement.classList.add("media-info");

        const titleElement = document.createElement("h4");
        titleElement.textContent = this.#title;

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${this.#author}`;

        const priceElement = document.createElement("p");
        priceElement.textContent = `DVD Price: $${this.#dvdPrice.toFixed(2)}`;

        const crunchyrollElement = document.createElement("p");
        crunchyrollElement.textContent = `Crunchyroll: ${this.#crunchyroll}`;

        infoElement.appendChild(titleElement);
        infoElement.appendChild(authorElement);
        infoElement.appendChild(priceElement);
        infoElement.appendChild(crunchyrollElement);

        mediaElement.appendChild(img);
        mediaElement.appendChild(infoElement);

        return mediaElement
    }
}

function displayMedia(items) {
    const mediaContainer = document.getElementById("media-container");
    mediaContainer.innerHTML ="";

    if (items.length === 0) {
        const notListed = document.createElement("p");
        notListed.textContent = "Anime/ Author not found in this list.";
        mediaContainer.appendChild(notListed);
    } else {
        items.forEach((item) => {
            const media = new Media(item.title, item.author, item.crunchyroll, item.dvdPrice, item.image);
            const mediaHTML = media.generateHTML();
            mediaContainer.appendChild(mediaHTML);
        });
    }
}

// default display
displayMedia(mediaData);

// search function
document.getElementById("searchbar").addEventListener("input", function() {
    const search = this.value.toLowerCase().trim();

    // filtering media
    const filterMedia = mediaData.filter(item =>
        item.title.toLowerCase().includes(search) ||
        item.author.toLowerCase().includes(search)
    );

    displayMedia(filterMedia);
});