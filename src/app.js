const cardFlip = (event) => {
  if (event.target.classList.contains('card')){
    let card = event.target
    card.classList.toggle('displayed')
    if (!card.classList.contains('displayed')) {
        card.src = "./Images/cards/card.svg"
      } else {
        let why = card.classList[1]
        card.src = `./Images/cards/card-${why}.svg`
      }
  }
}

const switchJourney = (event) => {
  if (event.target.classList.contains('journey-selector')) {
    let journey = document.querySelector('.journey-image')
    journey.classList.toggle('education')
    if (journey.classList.contains('education')) {
      journey.src = "./Images/education.svg"
      document.querySelector('.school').src = "./Images/cards/card-education.svg"
      document.querySelector('.work').src = "./Images/cards/card.svg"
    } else {
      journey.src = "./Images/career.svg"
      document.querySelector('.work').src = "./Images/cards/card-career.svg"
      document.querySelector('.school').src = "./Images/cards/card.svg"
    }
  }
}

const tabToggle = (event) => {
  if (event.target.classList.contains('tab')) {
    let tab = event.target
    let tabParent = tab.parentElement
    let tabs = tabParent.children
    for (t of tabs) {
      t.classList.remove('tab-displayed')
    }
    tab.classList.add('tab-displayed')
    projectDetailsSwitch(tab)
    projectImageswitch(tab)
  }
}

const projectDetailsSwitch = (tab) => {
  if (tab.innerHTML === 'Code') {
    console.log(tab.parentElement.parentElement)
    tab.parentElement.parentElement.querySelector('.code').style.display = 'block'
    tab.parentElement.parentElement.querySelector('.product').style.display = 'none'
  } else {
    tab.parentElement.parentElement.querySelector('.product').style.display = 'block'
    tab.parentElement.parentElement.querySelector('.code').style.display = 'none'
  }
}

const projectImageswitch = (tab) => {
  const project = tab.parentElement.parentElement
  data = project.querySelector('a').dataset
  console.log(data)
  if (tab.innerHTML === 'Code') {
    project.querySelector('a').href = data.codeLink
    project.querySelector('img').src = data.codeImage
  } else {
    project.querySelector('a').href = data.productLink
    project.querySelector('img').src = data.productImage
  }
}

const body = document.querySelector('body')
body.addEventListener('click', cardFlip);
body.addEventListener('click', switchJourney);
body.addEventListener('click', tabToggle);






