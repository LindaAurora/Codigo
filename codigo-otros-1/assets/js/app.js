const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');


function displayUser(username) {
  let promesa =  fetch(`${usersEndpoint}/${username}`,{
    method:"get"});
  promesa.then((response)=>{
    response.json().then((data)=>{
      $n.innerText = `${data.name}`;
      $b.innerText = `${data.blog}`;
      $l.innerText = `${data.location}`;
    }).catch((error)=>{
      handleError(error);
    });
  }).catch((error)=>{
    handleError(error);
  });
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski');