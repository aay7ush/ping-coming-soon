const form = document.querySelector("form")
const input = document.querySelector("input")
const error = document.querySelector("form p")

function validateEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(input).toLowerCase())
}

function alertMsg() {
  input.style.borderColor = "hsl(354, 100%, 66%)"
  error.style.display = "block"
}

function clearAlert() {
  input.style.borderColor = "hsla(0, 0%, 59%, 50%)"
  error.style.display = "none"
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!validateEmail(input.value)) {
    alertMsg()
  } else {
    alert("Thank You For Subscribing!")
  }
})

input.addEventListener("keypress", () => {
  clearAlert()
})
