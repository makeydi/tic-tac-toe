function renderingField(n,m){
  const container = document.createElement("div");
  container.className = "field";
  document.body.append(container);
  let arr = [];
  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
    for (let j = 0; j < m; j += 1) {
      arr[i][j] = {
        value: undefined,
        element: document.createElement("div"),
        changeValue: (val) => {
          arr[i][j].value = val;
        },
      };
      container.append(arr[i][j].element);
      arr[i][j].element.className = "elements";
      let els = document.querySelectorAll(".elements");
      for (let k = 0; k < els.length; k++) {
        els[k].addEventListener("click", setValue);
      }
      let numberOfSteps = 0;
      let progress = "X";
      function setValue() {
        if (numberOfSteps > n * m - 2) {
          confirm("Игра окончена -  Ничья");
          return ;
        }
        this.innerHTML = progress;
        arr[i][j].changeValue("0");
        if (progress == "X") {
          progress = "0";
          arr[i][j].changeValue("X");
        } else {
          progress = "X";
        }
        this.removeEventListener("click", setValue);
        numberOfSteps++;
        checkWinner();
        function checkWinner() {
          if (arr[i][j].element.innerHTML == '') {
            return;
          }
          if (
            (j == 1 && arr[i][j].element.innerHTML == arr[i][j-1].element.innerHTML && arr[i][j].element.innerHTML == arr[i][j+1].element.innerHTML) ||
            (j == 0 && arr[i][j].element.innerHTML == arr[i][j+1].element.innerHTML && arr[i][j].element.innerHTML == arr[i][j+2].element.innerHTML) ||
            (j == 2 && arr[i][j].element.innerHTML == arr[i][j-1].element.innerHTML && arr[i][j].element.innerHTML == arr[i][j-2].element.innerHTML) ||
            (i == 1 && arr[i][j].element.innerHTML == arr[i-1][j].element.innerHTML && arr[i][j].element.innerHTML == arr[i+1][j].element.innerHTML) ||
            (i == 0 && arr[i][j].element.innerHTML == arr[i+1][j].element.innerHTML && arr[i][j].element.innerHTML == arr[i+2][j].element.innerHTML) ||
            (i == 2 && arr[i][j].element.innerHTML == arr[i-1][j].element.innerHTML && arr[i][j].element.innerHTML == arr[i-2][j].element.innerHTML) ||
            (i == 0 && j == 0 && arr[i][j].element.innerHTML == arr[i+1][j+1].element.innerHTML && arr[i][j].element.innerHTML == arr[i+2][j+2].element.innerHTML) ||
            (i == 1 && j == 1 && arr[i][j].element.innerHTML == arr[i-1][j+1].element.innerHTML && arr[i][j].element.innerHTML == arr[i+1][j-1].element.innerHTML) ||
            (i == 2 && j == 2 && arr[i][j].element.innerHTML == arr[i-2][j-2].element.innerHTML && arr[i][j].element.innerHTML == arr[i-1][j-1].element.innerHTML) ||
            (i == 2 && j == 0 && arr[i][j].element.innerHTML == arr[i-1][j+1].element.innerHTML && arr[i][j].element.innerHTML == arr[i-2][j+2].element.innerHTML) ||
            (i == 1 && j == 1 && arr[i][j].element.innerHTML == arr[i+1][j-1].element.innerHTML && arr[i][j].element.innerHTML == arr[i-1][j+1].element.innerHTML) ||
            (i == 0 && j == 2 && arr[i][j].element.innerHTML == arr[i+1][j-1].element.innerHTML && arr[i][j].element.innerHTML == arr[i+2][j-2].element.innerHTML)
          )
          {
            let modalContainer = document.createElement('div');
            modalContainer.className = 'modalContainer';
            let modalWinn = document.createElement('div');
            let closeBtn = document.createElement('button');
            let str = document.createElement('h2');
            str.innerHTML = 'Выиграли: ' + arr[i][j].element.innerHTML + '-ки';
            modalWinn.append(str);
            closeBtn.className = 'closeBtn';
            closeBtn.innerHTML = 'Начать новую игру';
            modalWinn.append(closeBtn);
            modalWinn.className = 'modal';
            container.append(modalContainer);
            modalContainer.append(modalWinn);
            document.body.className = 'lock';
            closeBtn.addEventListener('click', ()=> {
            location.reload()
            });
          } else return;
        }
      }
    }
  }
}

export default renderingField;