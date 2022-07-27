let butt = document.querySelector('.fa-eye')

butt.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type' , 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#email')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#password')
    let senhaLabel = document.querySelector('#senhaLabel')

    let messageError = document.querySelector('#messageError')

    let listaUser = []

    //Objetos com campos pre-determinados
    let userValid = {
        nome: '',
        user: '',
        senha: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    /*Validação do usuario cadastrado*/
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid ={
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        event.preventDefault()
        alert('Bem vindo')
        window.location.href= './bib.html'
        //token
        let token =Math.random().toString(10).substring(2)
        localStorage.setItem('token', token) 

    /*}else if (usuario.value != userValid.user && senha.value != userValid.senha && usuario.value == null && senha.value == null){
        alert('Insira os dados')
        userio.focus()*/

    } else {
        alert('Login ou senha incorretos')
        usuario.focus()
    }
}
