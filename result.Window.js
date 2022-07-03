function displayResult(winner) {
    let modalContainer = document.createElement('div');
    modalContainer.className = 'modalContainer';
    let modalWinn = document.createElement('div');
    let closeBtn = document.createElement('button');
    let str = document.createElement('h2');
    str.innerHTML = 'Выиграли: ' + winner + '-ки';
    modalWinn.append(str);
    closeBtn.className = 'closeBtn';
    closeBtn.innerHTML = 'Начать новую игру';
    modalWinn.append(closeBtn);
    modalWinn.className = 'modal';
    document.querySelector('.field').append(modalContainer);
    modalContainer.append(modalWinn);
    document.body.className = 'lock';
    closeBtn.addEventListener('click', () => {
      location.reload();
    });
}

export default displayResult;