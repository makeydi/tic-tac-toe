import displayResult from './result.Window.js';

function checkWinner(arr1) {
    let arr = arr1;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (
          (j === 1 &&
            arr[i][j].element.innerHTML == arr[i][j - 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i][j + 1].element.innerHTML) ||
          (j === 0 &&
            arr[i][j].element.innerHTML == arr[i][j + 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i][j + 2].element.innerHTML) ||
          (j === 2 &&
            arr[i][j].element.innerHTML == arr[i][j - 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i][j - 2].element.innerHTML) ||
          (i === 1 &&
            arr[i][j].element.innerHTML == arr[i - 1][j].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i + 1][j].element.innerHTML) ||
          (i === 0 &&
            arr[i][j].element.innerHTML == arr[i + 1][j].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i + 2][j].element.innerHTML) ||
          (i === 2 &&
            arr[i][j].element.innerHTML == arr[i - 1][j].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i - 2][j].element.innerHTML) ||
          (i === 0 && j === 0 &&
            arr[i][j].element.innerHTML == arr[i + 1][j + 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i + 2][j + 2].element.innerHTML) ||
          (i === 1 && j === 1 &&
            arr[i][j].element.innerHTML == arr[i - 1][j + 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i + 1][j - 1].element.innerHTML) ||
          (i === 2 && j === 2 &&
            arr[i][j].element.innerHTML == arr[i - 2][j - 2].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i - 1][j - 1].element.innerHTML) ||
          (i === 2 && j === 0 &&
            arr[i][j].element.innerHTML == arr[i - 1][j + 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i - 2][j + 2].element.innerHTML) ||
          (i === 1 && j === 1 &&
            arr[i][j].element.innerHTML == arr[i + 1][j - 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i - 1][j + 1].element.innerHTML) ||
          (i === 0 && j === 2 &&
            arr[i][j].element.innerHTML == arr[i + 1][j - 1].element.innerHTML &&
            arr[i][j].element.innerHTML == arr[i + 2][j - 2].element.innerHTML)
        ) { if (arr[i][j].element.innerHTML !== '') {
            let winner = arr[i][j].element.innerHTML;
            displayResult(winner);
          }
        }
      }
    }
}

export default checkWinner;
