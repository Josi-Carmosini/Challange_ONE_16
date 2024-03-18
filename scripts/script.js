
function desligarDiv(id){
    let elemento = document.getElementById(id);
    elemento.classList.add('divDesabilitada')
}

function ligarDiv(id){
    let elemento = document.getElementById(id);
    elemento.classList.remove('divDesabilitada')
    elemento.classList.add('divHabilitada')
}

function pegarConteudo(classe){
    let textarea = document.querySelector(classe);
    let textoDigitado = textarea.value;
    return textoDigitado
}


function criptografar() {
    let textoCriptografado = '';
    let textoDigitado = pegarConteudo(".conteudo__entrada__texto")
    
    if (!textoDigitado){
        console.log('nao há texto na area');
        alert('Você precisa digitar um texto antes de clicar em "Criptografar"');
       
    }else{
        for (let i = 0; i < textoDigitado.length; i++) {
            let letra = textoDigitado[i];
            
            switch(letra) {
                case 'a':
                    textoCriptografado += 'ai';
                    break;
                case 'e':
                    textoCriptografado += 'enter';
                    break;
                case 'i':
                    textoCriptografado += 'imes';
                    break;
                case 'o':
                    textoCriptografado += 'ober';
                    break;
                case 'u':
                    textoCriptografado += 'ufat';
                    break;
                default:
                    textoCriptografado += letra;
                    break;
            }
        }

        desligarDiv('saida__imagem_mensagem');
        ligarDiv('saida__criptografia');
        
        }
        console.log(textoCriptografado)

        let saidaTexto = document.querySelector(".conteudo__saida__texto");
        saidaTexto.innerHTML = textoCriptografado;

}

function copiarTexto() {
    var texto = pegarConteudo('.conteudo__saida__texto');
    navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado para a área de transferência!");
    }, function(err) {
      console.error('Falha ao copiar texto: ', err);
    });
  }


  

  function decriptografar() {
    let textoDecriptografado = '';
    let textoCriptografado = pegarConteudo(".conteudo__entrada__texto");

    if (!textoCriptografado) {
        console.log('Não há texto na área');
        alert('Você precisa digitar um texto antes de clicar em "Descriptografar"');
    } else {
        let i = 0;
        while (i < textoCriptografado.length) {
            let letra = textoCriptografado[i];

            switch (letra) {
                case 'a':
                    if (textoCriptografado[i + 1] === 'i') {
                        textoDecriptografado += 'a';
                        i += 1;
                    }
                    break;
                case 'e':
                    if (textoCriptografado.slice(i, i + 5) === 'enter') {
                        textoDecriptografado += 'e';
                        i += 4;
                    }
                    break;
                case 'i':
                    if (textoCriptografado.slice(i, i + 4) === 'imes') {
                        textoDecriptografado += 'i';
                        i += 3;
                    }
                    break;
                case 'o':
                    if (textoCriptografado.slice(i, i + 4) === 'ober') {
                        textoDecriptografado += 'o';
                        i += 3;
                    }
                    break;
                case 'u':
                    if (textoCriptografado.slice(i, i + 4) === 'ufat') {
                        textoDecriptografado += 'u';
                        i += 3;
                    }
                    break;
                default:
                    textoDecriptografado += letra;
                    break;
            }

            i++;
        }
        
        desligarDiv('saida__imagem_mensagem');
        ligarDiv('saida__criptografia');
        
    }

    console.log(textoDecriptografado);

    let saidaTexto = document.querySelector(".conteudo__saida__texto");
    saidaTexto.innerHTML = textoDecriptografado;
}
