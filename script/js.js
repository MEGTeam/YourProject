// set img src
const IMAGES = document.querySelectorAll(".js .card-img img");

IMAGES.forEach((e, i) => {
    e.setAttribute("src", `../images/Project-${i + 1}.jpg`);
    if (i === 0) e.setAttribute("src", `../images/project-${i + 1}.jpg`);
});

const FILTERBUTTONS = document.querySelectorAll(".filter-Buttons button");
let t;

FILTERBUTTONS.forEach((button) => {
    button.addEventListener("click", () => {
        // remove active class from all buttons
        FILTERBUTTONS.forEach((button) => {
            button.classList.remove("active");
        });

        // add active class to target button
        button.classList.add("active");

        // dislplay correct cards
        CARDS.forEach((c) => {
            if (displayedCards.includes(c)) {
                if (
                    button.dataset.control === c.dataset.group ||
                    button.dataset.control === "*"
                ) {
                    c.classList.add("active");
                    c.classList.remove("hide");
                } else {
                    c.classList.remove("active");
                    c.classList.add("hide");
                }
            }
        });
    });
});

// select allCards and show button and set a var to track displayed cards
const CARDS = document.querySelectorAll(".card-img");
const addButton = document.querySelector(".show-more");
let cardCount = 0;
let displayedCards = [];

function addClass(c, e) {
    e.classList.add(c);
}

function display4Cards() {
    let count = 0;

    while (count < 4) {
        let x = CARDS[cardCount];
        displayedCards.push(x);
        x.classList.remove("hidden");
        setTimeout(() => x.classList.add("active"), 150);
        cardCount++;
        count++;
    }

    if (cardCount >= CARDS.length) {
        addClass("dis", addButton);
        addButton.textContent = "No More To Load";
        return;
    }
}

display4Cards();

addButton.addEventListener("click", display4Cards);
