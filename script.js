const main = document.querySelector('#main')
const addUserBtn = document.querySelector('#add-user')
const doubleBtn = document.querySelector('#double')
const showMillionairesBtn = document.querySelector('#show-millionaires')
const sortBtn = document.querySelector('#sort')
const calculateWealthBtn = document.querySelector('#calculate-wealth')

let data = []

// fetch random user and add money
async function getRandomUser() {
  fetch('https://randomuser.me/api')

  const res = await fetch('https://randomuser.me/api')

  const data = await res.json()

  const user = data.results[0]

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  }

  addData(newUser)
}

// Add the new object to data array
function addData(obj) {
  data.push(obj)

  updateDOM()
}

function updateDOM(providedData = data) {
  //Clear main div

  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>'

  providedData.forEach(item => {
    const element = document.createElement('div')
    element.classList.add('person')
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`

    main.appendChild(element)
  })
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

// Doubles everyone's money
function doubleTheMoney() {
  data = data.map(user => {
    return {
      ...user,
      money: user.money * 2
    }
  })

  updateDOM(data)
}

// Sorts the money by richest
function sortByRichest() {
  data = data.sort((a, b) => {
    return b.money - a.money
  })

  updateDOM()
}

// Filters the users and only shows the millionaires
function showMillionaires() {
  data = data.filter(user => user.money >= 1000000)

  updateDOM()
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleTheMoney)
sortBtn.addEventListener('click', sortByRichest)
showMillionairesBtn.addEventListener('click', showMillionaires)
calculateWealthBtn.addEventListener('click', calculateWealth)
