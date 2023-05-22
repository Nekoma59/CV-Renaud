const darkmode = document.getElementById('darkmode');

darkmode.addEventListener('click', () => {

  const right_Side = document.getElementById('right_Side');

  if(right_Side.classList.contains('darkmode')) {
    right_Side.classList.add('light')
    right_Side.classList.remove('darkmode')
    

  } else if (right_Side.classList.contains('light')) {
    right_Side.classList.add('darkmode')
    right_Side.classList.remove('light')
  }

})