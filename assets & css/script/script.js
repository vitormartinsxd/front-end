/*
Case Sensitive = reconhece letras maiuscula e minusculas

por Tag getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()

*/
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"
    

function validaNome () {
    let txt = document.querySelector('#textNome')
    if (nome.value.length < 3){
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
        
    }   
    else {
        txt.innerHTML = 'Nome Valido'
        txt.style.color = 'green'
        nomeOk = true
        
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#textEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector('#textAssunto')

    if(assunto.value.length >= 2){
        txtAssunto.innerHTML = 'Maximo 100 caracter'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar () {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso.")
        alert("Olá " + nome.value + ", obrigado pelo seu feedback. O seu email é " + email.value + " agradeço o contato. " + assunto.value);
    }
    else{
        alert("Preencha o formulario corretamente.")
    }
    
}

function mapaZoom () {
    mapa.style.width = '805px'
    mapa.style.height = '600px'
}

function mapaNormal (){
    mapa.style.width = '300px'
    mapa.style.height = '240px'

}

