const form = document.querySelector('form')
const nlwSetupForm = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetupForm.dayExists(today)

  if (dayExists) {
    alert("Dia já adicionado 🔴️")
    return
  }

  nlwSetupForm.addDay(today)
  alert("Adicionado com sucesso ✅️")
}

function save () {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetupForm.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetupForm.setData(data)
nlwSetupForm.load()

// data object format
// const data = {
//   run: ['01-01', '01-02', '01-06'],
//   water: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06'],
//   food: ['01-01', '01-03', '01-06'],
//   journal: ['01-03'],
//   takePills: ['01-04'],
// }

// nlwSetupForm.setData(data)
// nlwSetupForm.load()
