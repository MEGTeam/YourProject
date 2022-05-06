let white = document.querySelector(".white")
let newUL = document.querySelectorAll(".new-ul li")
let menuicon = document.querySelector("#menuicon")

menuicon.addEventListener("click", () => {
    menuicon.classList.toggle("active")
    white.classList.toggle("active")
    newUL.forEach(e => e.classList.toggle("active"))
})