const answer = document.querySelectorAll(".answer")
const question = document.querySelectorAll(".link")
const arrow = document.querySelectorAll(".arrow")


question.forEach((question) => question.addEventListener("click", () => {
    if (question.parentNode.children[1].classList.contains("hide")) {
        document.querySelectorAll(".link").forEach(question => question.parentNode.children[1].classList.add("hide"))

        question.parentNode.children[1].classList.remove("hide")
    }

    else {    
        question.parentNode.children[1].classList.add("hide")
    }
}))