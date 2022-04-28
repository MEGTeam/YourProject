// set img src
const IMAGES = document.querySelectorAll(".card-img img");

IMAGES.forEach((e, i) => {
    e.setAttribute("src", `../images/project-${i + 1}.jpg`);
});

const FILTERBUTTONS = document.querySelectorAll(".filter-Buttons button");

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
                    c.classList.remove("none");
                } else {
                    c.classList.remove("active");
                    c.classList.add("hide");
                    setTimeout(() => {
                        c.classList.add("none");
                    }, 300);
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
        x.classList.add("active");
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

// test

// CARDS.forEach((card) => {
//     card.addEventListener("click", () => {
//         card.classList.toggle("active");
//         card.classList.toggle("hide");
//         setTimeout(() => {
//             card.classList.toggle("none");
//         }, 300);
//     });
// });
