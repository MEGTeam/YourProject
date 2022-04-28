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
    });
});
