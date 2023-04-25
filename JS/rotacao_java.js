let tmp = 0;

function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 1000);

}

function alteraBanner1() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./img/banner-lateral-1.png";
    img2.src = "./img/banner-lateral-2.png";

    setTimeout(alteraBanner2, 1000);

}
 
function alteraBanner2() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./img/banner-lateral-2.png";
    img2.src = "./img/banner-lateral-1.png";

    setTimeout(alteraBanner3, 1000);

}

function alteraBanner3() {
    
    // let nr = Math.ceil(Math.random() *3);
    const img1 = document.querySelector(".l-d > img");
    const img2 = document.querySelector(".l-e > img");
    img1.src = "./img/banner-lateral-1.png";
    img2.src = "./img/banner-lateral-2.png";

    setTimeout(alteraBanner1, 1000);

}

alteraBanner1();