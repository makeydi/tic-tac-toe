const RenderingField = () => {
  const container = document.createElement("div");
  container.className = "field";
  document.body.append(container);

  let arr = [];
  
  for (let i = 0; i < 3; i += 1) {
    
    arr[i] = [];
    for (let j = 0; j < 3; j += 1) {
   
    
      arr[i][j] = {
        value: '',
        element: document.createElement("div"),
        changeValue: () => {
            
            
              let progress = 0;
               globalThis.container = document.addEventListener("click", e => {
               
                  if (progress % 2 === 0) {
                   e.target.innerHTML = 'X';
                   console.log(arr.innerHTML);
  
                  } else {
                    e.target.innerHTML = '0';
                    
                  }
                  progress++;
                  checkWin();               
                });
                
            },

        
      };

    arr[i][j].changeValue();
    container.append(arr[i][j].element);
    arr[i][j].element.className = 'elements';
   
    
   
    }

  }
 
 

   
 
  
  
}

    RenderingField();
      


