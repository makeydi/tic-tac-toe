import listenSetValue from './setValue.js';

function renderingField(n, m) {
  const container = document.createElement('div');
  container.className = 'field';
  document.body.append(container);
  let arr = [];

  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
    for (let j = 0; j < m; j += 1) {
      arr[i][j] = {
        value: undefined,
        element: document.createElement('div'),
        changeValue: (val) => {
          arr[i][j].value = val;
        },
      };
      container.append(arr[i][j].element);
      arr[i][j].element.className = 'elements'; 
    }
  }
  return listenSetValue(arr);
}

export default renderingField; 