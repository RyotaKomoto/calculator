const buttons = document.querySelectorAll('button');
      const result = document.querySelector('#result');

      let concatText = "";
      function buttonPressed(event){
        
        const text = event.target.textContent;
        
        if(text === '=') {
          concatText = eval(concatText);
        } else if(text === '') {
          concatText = '0'
        }else if(text === 'AC') {
          concatText = "0";
        } else if(text === '%') {
          concatText = concatText / 100
        } else if(text === "+/-") {
          concatText = concatText * (-1)
        }else if(text ==="÷"){
          concatText = concatText + '/'
        }else if (text === "×"){
          concatText = concatText + '*'
        }
        else{
          concatText += text;
        }
        
        result.textContent = concatText;
      }
      buttons.forEach(button => button.addEventListener('click',buttonPressed));