import './styles/main.css'
import { model } from './model'

const idSite = document.querySelector('#site')

model.forEach(block => {
  idSite.insertAdjacentHTML('beforeend', block.toHTML())
})

