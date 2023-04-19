// //Exemplo de funções

// const divElement = document.getElementById("div-box")

// // divElement.addEventListener("click", ()=> {
// //     console.log(divElement);
// // });

// divElement.addEventListener("click", mostraElement);

// function mostraElement(){
//     console.log(divElement)
// }

// function soma(){
//     let n1 = 10
//     let n2 = 5
//     console.log(n1+n2)
// }

// //Recuperando elementos do HTML com queryselector
// const liElement = document.querySelector("")
// console.log(liElement);

 //Recuperando elementos do HTML com queryselector
// const liElement = document.querySelectorAll("li");

// //Convertendo NODE ist em array com spread
// const arrayElement = [...liElement];

// console.log(arrayElement);


// //Recuperando elementos do HTML com queryselector
// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map((el,key)=>{

//     if (el.textContent.indexOf("1") != (-1)){
//         el.textContent = `[${el.textContent}]`;
//     }
// });
let tmp = 0;


function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 5000);

}

function pararTimeOut() {
    clearTimeout(tmp);
}

mudaCor()
