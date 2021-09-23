function convert () {

    const binary = document.getElementById('b-input').value;

    if(binary === '') return alert("Por favor, insira um número binário");

    binary.split('').map((char) => {
        if(char !== '0' && char !== '1') return alert("Por favor, insira um número binário");
    })
    
    const decimal = parseInt(binary, 2);
    document.getElementById('d-input').value = decimal;
    return true;
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.line');
typeWrite(titulo);