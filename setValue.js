import checkWinner from './checkWinner.js'

function listenSetValue(arr1)  {
    let arr = arr1;
    let els = document.querySelector('.field');
    els.addEventListener('click', setValue);
    let numberOfSteps = 0;
     let progress = 'X';
     
  function setValue(event) {
    
        if (numberOfSteps > 7) {
          confirm('Игра окончена -  Ничья');
          return;
        }
        if (event.target.innerHTML !== '') {
            return;
        }
        event.target.innerHTML = progress;
        if (progress == 'X') {
          progress = '0';
         
        } else {
          progress = 'X';
        }
        numberOfSteps++;
        checkWinner(arr);
  }
}

export default listenSetValue;