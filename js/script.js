const darkmode = document.getElementById('darkmode');

darkmode.addEventListener('click', () => {

  const body = document.body;

  if(body.classList.contains('darkmode')) {
    body.classList.add('light')
    body.classList.remove('darkmode')
    body.innerHTML = "Go dark"

  } else if (body.classList.contains('light')) {
    body.classList.add('darkmode')
    body.classList.remove('light')
    body.innerHTML = "Go light"

  }

})