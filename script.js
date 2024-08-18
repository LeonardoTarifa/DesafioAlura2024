let area1 = document.querySelector(".digitarTexto");
let area2 = document.querySelector(".receberTexto");

let chaveCriptografia = [["e", "enter"], ["i","imes"] , ["a", "ai"] , ["o" , "ober"] , ["u", "ufat"]];

document.getElementById("digitarTexto").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890qwertyuioplkjhgfdsazxcvbnm".indexOf(chr) < 0)
      return false;
  };

function criptografarInformacao(){
    document.getElementById("receberTexto").style.backgroundImage = "none";
    document.getElementById("btnCopiar").style.visibility = "visible";
    document.getElementById("aviso__titulo").style.display = "none";
    document.getElementById("aviso__paragrafo").style.display = "none";

    let mensagemCriptografada = criptografia(area1.value);

    area2.value = mensagemCriptografada;
    area1.value = "";
}

function criptografia(mensagem){
    

    for(let i = 0; i < chaveCriptografia.length; i++){
        if(mensagem.includes(chaveCriptografia[i][0])){
            mensagem = mensagem.replaceAll(chaveCriptografia[i][0] , chaveCriptografia[i][1])
        }
    }
    return mensagem;

}

function descriptografarInformacao(){
    document.getElementById("receberTexto").style.backgroundImage = "none";
    document.getElementById("btnCopiar").style.visibility = "visible";
    document.getElementById("aviso__titulo").style.display = "none";
    document.getElementById("aviso__paragrafo").style.display = "none";

    let mensagemDescriptografada = descriptografia(area1.value);

    area2.value = mensagemDescriptografada;
    area1.value = "";
}

function descriptografia(mensagem){

    for(let i = 0; i < chaveCriptografia.length; i++){
        if(mensagem.includes(chaveCriptografia[i][1])){
            mensagem = mensagem.replaceAll(chaveCriptografia[i][1] , chaveCriptografia[i][0])
        }
    }
    return mensagem;

}


function copiarTexto(){
    navigator.clipboard.writeText(area2.value);
}