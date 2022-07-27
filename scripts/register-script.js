//Ver senhas
let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#verConfirmar')

btnConfirm.addEventListener('click', ()=>{
    let inputConfirm = document.querySelector('#confpassword')

    if(inputConfirm.getAttribute('type') == 'password'){
        inputConfirm.setAttribute('type', 'text')
    }else{
        inputConfirm.setAttribute('type', 'password')
    }
})
//Fim

let nome = document.querySelector('#name')
let labelNome = document.querySelector('#labelNome')
let validNome = false

/*nome.addEventListener('keyup', () =>{
    if (nome.value.length <=10) {
    labelNome.setAttribute('style', 'color:pink')
    labelNome.innerHTML = 'Nome *Insira no mínimo 10 caracteres'
    nome.setAttribute()
    validNome = false
    }else{
    labelNome.setAttribute('style' ,'color:lightblue')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color:blue')
    validNome = true
    }
})*/

let usuario = document.querySelector('#email')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = true

/*usuario.addEventListener('keyup', () =>{
    if (usuario.value.length <=1) {
    labelUsuario.setAttribute('style', 'color:red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 2 caracteres'
    usuario.setAttribute()
    validUsuario = false
    }else{
    labelUsuario.setAttribute('style' ,'color:blue')
    labelUsuario.innerHTML = 'Usuario'
    usuario.setAttribute('style', 'border-color:blue')
    validUsuario = true
    }
})*/

let senha = document.querySelector('#password')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = true

senha.addEventListener('keyup', () =>{
    if (senha.value.length <=5) {
    labelSenha.setAttribute('style', 'color:pink')
    labelSenha.innerHTML = 'Insira no mínimo 6 caracteres'
    validSenha = false
    }else{
    labelSenha.setAttribute('style' ,'color:lightblue')
    labelSenha.innerHTML = 'Senha'
    validSenha = true
    }
})

let confirmar = document.querySelector('#confpassword')
let labelConfirmar = document.querySelector('#labelConfirmar')
let validConfirmar = false

confirmar.addEventListener('keyup', () =>{
    if (senha.value != confirmar.value) {
    labelConfirmar.setAttribute('style', 'color:pink')
    labelConfirmar.innerHTML = 'Senhas devem ser iguais'
    validConfirmar = false
    }else{
    labelConfirmar.setAttribute('style' ,'color:lightblue')
    labelConfirmar.innerHTML = 'Confirmar senha'
    validConfirmar = true
    }
})

function cadastrar(){
    if (validNome && validUsuario && validSenha && validConfirmar) {
        event.preventDefault()
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        /*Incremento*/
        listaUser.push({
        nomeCad: nome.value,
        userCad: usuario.value,
        senhaCad: senha.value,
        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
        alert('Sucess')
        window.location.href ='./login.html'
    }else{
        alert('Preencha os campos corretamente')
    }
    }
    