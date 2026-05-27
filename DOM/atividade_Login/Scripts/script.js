const botao = document.getElementById("botao");
const usuario = document.getElementById("caixausuario");
const senha = document.getElementById("caixasenha");
const textoResultado = document.getElementById("mensagemlogin");

const usuarioCorreto = "admin"
const senhaCorreta = "1234"

botao.addEventListener("click", () => {
    usuarioDigitado = usuario.value;
    senhaDigitado = senha.value;

    if(usuarioDigitado === usuarioCorreto && senhaDigitado === senhaCorreta) {
        textoResultado.innerText = "Login realizado com sucesso. Seja bem-vindo(a)!";
    } else {
        textoResultado.innerText = "Usuário ou senha inválidos, tente novamente!";
    }
});