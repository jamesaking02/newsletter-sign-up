const emailInput = document.querySelector("#email-input")
const emailRegex = validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const subscribe = document.querySelector("#subscribe-bttn")
const dismiss = document.querySelector(".success__dismiss-button")
const form = document.querySelector(".signup-form")
const successPage = document.querySelector(".success")
const img = document.querySelector(".illustration-img")
const desktopImg = document.querySelector(".desktop-img")
const desktop = window.matchMedia("(width >= 900px)")
let valid = true
// emailInput.style.setProperty("--empty-color", "hsl(4, 100%, 95%)")

function invalid() {
  if (emailInput.value.match(validRegex)) {
    emailInput.style.backgroundColor = "hsl(0, 100%, 100%)"
    emailInput.style.outlineColor = "var(--dark-slate-grey)"
    valid = true
  } else {
    emailInput.style.backgroundColor = "hsl(4, 100%, 95%)"
    emailInput.style.outlineColor = "var(--tomato)"
    valid = false
  }
}

function confirmation() {
  if (valid !== true) {
    return
  } else {
    successPage.classList.remove("hidden")
    form.classList.add("hidden")
    img.classList.add("hidden")
    // desktop.matches ? desktopImg.classList.add("hidden") : null
    document.querySelector(".success__icon").style.animation = 
    "iconAnimation .3s forwards"
    document.querySelector(".container").style.animation = 
    "textAnimation 1s forwards"
  }
  
  dismiss.addEventListener('click', () => {
    successPage.classList.add("hidden")
    form.classList.remove("hidden")
    img.classList.remove("hidden")
    // desktop.matches ? desktopmg.classList.remove("hidden") : null
    emailInput.style.backgroundColor = "var(--white)"
  })
  emailInput.value = ""
}
window.addEventListener('load', () => {
  emailInput.value = ""
})
emailInput.addEventListener('input', invalid)
emailInput.addEventListener('invalid', invalid)
subscribe.addEventListener('click', invalid)
subscribe.addEventListener('click', confirmation)