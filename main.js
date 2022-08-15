import './style.css'
import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

let orgID = 0;

let getOrgs = async () => {
  let response = await fetch(`https://api.github.com/organizations?per_page=10&since=${orgID}`)
  return response.json();
}

getOrgs().then((orgs) => {
  console.log(orgs)

  orgs.forEach(org => {

    // document.querySelector('#list').innerHTML = org
  })

})
