const inputUser = document.querySelector("input[type='text']");

inputUser.addEventListener("focus",()=>{
    inputUser.setAttribute("style","outline-color:#ff4562")
});

inputUser.addEventListener("keyup",()=>{

    const labelUser = document.querySelector("label[for='idNm']");

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff4562")
        labelUser.setAttribute("style","color:#ff4562")
    }else{
        inputUser.setAttribute("style","outline-color:#00f489")
        labelUser.setAttribute("style","color:#00f489")

    }
});