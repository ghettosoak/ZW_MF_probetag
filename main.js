import './style.css'
import './main.less'

let orgID = 0;

let loadOrgs = async () => {
  let response = await fetch(`https://api.github.com/organizations?per_page=10&since=${orgID}`, {
    'Authorization': import.meta.env.VITE_GITLAB_PAT
  }).catch((error) => {
    console.error('FETCH ERROR: ', error)
  });
  return response.json();
}

let getOrgs = () => {

  loadOrgs().then((returnedOrgs) => {
    console.log(returnedOrgs)

    returnedOrgs.forEach(returnedOrg => {
      let org = `
      <a class="org" href="${returnedOrg.url}">
        <div class="avatar" style="background-image: url(${returnedOrg.avatar})"></div>
        <h3>${returnedOrg.login}</h3>
        <p>${returnedOrg.description || ''}</p>        
      </a>
      `;

      document.querySelector('.list_interior').innerHTML += org;
    });

    orgID = returnedOrgs[returnedOrgs.length - 1].id + 1;
  }).catch((error) => {
    console.error('PROCESSING ERROR: ', error)
  });

}

let setup = () => {
  document.querySelector('.loadMore').addEventListener('click', getOrgs)
  getOrgs();
}

setup();

export {
  loadOrgs,
  getOrgs
}

