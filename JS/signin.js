"use strct";

//CRIANDO UM OBJETO
//CRIANDO UMA LISTA DE OBJETOS 

let listaDeUsuarios = [
    {
        nomeCompleto : "José da Silva",
        nomeUsuario : "jose",
        senhaUsuario : "123456",
    }
    ,
    {
        nomeCompleto : "Maria da silva",
        nomeUsuario : "maria",
        senhaUsuario : "123456",
    }
    ,
    {
        nomeCompleto : "João da Silva",
        nomeUsuario : "joao",
        senhaUsuario : "123456",
    }

]

///criar uma lisa de objetos

// let listaDeUsuarios = []
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

// listaDeUsuarios.forEach( (usuario)=>{
    
//     console.log("NOME DE USUÁRIO : " + usuario.nomeUsuario);
//     console.log("SENHA DE USUÁRIO : " + usuario.senhaUsuario);

// });

//Adicionado a lista de bjetos no localStorage
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        //Entrada do usuário
        let usuarioValidado = {
            usuarioInput : document.querySelector("#usuario").value,
            senhaInput : document.querySelector("#senha").value
        }
        const msgError = document.querySelector("#msgError");
        try{

            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            listaUser.forEach((usuario)=>{

                if(usuarioValidado.usuarioInput == usuario.nomeUsuario && usuarioValidado.senhaInput == usuario.senhaUsuario){
                    //Adicionando nova propiedade no objeto.
                    usuarioValidado["nomeCompleto"] = usuario.nomeCompleto;
                    throw "USUÁRIO VALIDADO!";
                }
            });
            throw "SENHA OU NOME DE USUÁRIO INVÁLIDO!";
        }catch(msg){
            if(msg == "USUÁRIO VALIDADO!"){
                
                //Adicionando o objeto usuarioValidado no strage
                localStorage.setItem("usuario-validado",JSON.stringify(usuarioValidado))

                msgError.setAttribute("style","color:#00ff00;display:block;")
                msgError.innerHTML = "<strong>Usuário validado!</strong>"

                //Criando o sistema de redirect
                setTimeout(function () {
                    window.location.href = "../home.html";
                }, 3000 );
    

            }else{
                msgError.setAttribute("style","color:#ff0000;display:block;");
                msgError.innerHTML = "<strong>Senha ou nome de Usuário inválidos!</strong>";
            }
        }
           


    }
});