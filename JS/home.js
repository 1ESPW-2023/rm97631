
if(JSON.parse(localStorage.getItem("usuario-validado")) != null){
    //Exercicio
    //Analisando o objeto que chega ná página home através do localStorage faça com que somente se o objeto possuir coteúdo o usário possa permanecer na página.
    //Utilize os mesmos conceitos mostrados agora de redirecionamento e validação de objetos.

    //Recepcionando o objeto que logou no localStorage e imprimindo uma de suas propiedades.

    const spanUser = document.querySelector("#user");
    let usuario = JSON.parse(localStorage.getItem("usuario-validado"))
    spanUser.innerHTML = usuario.nomeCompleto;

    const botaoLogout = document.querySelector("#btnLogout");
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("usuario-validado");
        window.location.href = "../login.html"; 
    });
}else{
    window.location.href = "../login.html"
}
