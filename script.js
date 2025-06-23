
const slide2=document.querySelectorAll('[data-js="slide21"]')
const prev=document.querySelector('[data-js="previous"]')
const next=document.querySelector('[data-js="next"]')

let slideIndex = 0

next.addEventListener("click",()=>{
    if(slideIndex===slide2.length -1){
        slideIndex = 0
    } else {
        slideIndex++
    }
    slide2.forEach(slider =>{
        slider.classList.remove('active')
    });
    slide2[slideIndex].classList.add('active')
})

prev.addEventListener("click", ()=>{
    if(slideIndex===0){
        slideIndex=slide2.length-1
    }else{
        slideIndex--
    }
    slide2.forEach(slider=>{
        slider.classList.remove('active')
    });
    slide2[slideIndex].classList.add('active');
})



const caixaDP = document.querySelectorAll('.caixa1')
const proDP = document.querySelector('.btn-dp1')
const antDP = document.querySelector('.btn-dp2')

let slideDP = 0

function pdep (){

    if(slideDP==caixaDP.length -1){
        slideDP=0
    }else{
        slideDP++
    }
    caixaDP.forEach(caixa=>{
        caixa.classList.remove('cxActive')
    });
    caixaDP[slideDP].classList.add('cxActive');
    console.log(slideDP);
}
proDP.addEventListener("click", pdep);

function adep(){
    if(slideDP===0){
        slideDP=caixaDP.length-1
    }else{
        slideDP--
    }
    caixaDP.forEach(caixa=>{
        caixa.classList.remove('cxActive')
    });
    caixaDP[slideDP].classList.add('cxActive')

}
antDP.addEventListener("click", adep )

function iniciarTimer (){
    timer = setInterval ( pdep,15000);
}

function reiniciarTimer (){
    clearInterval (timer);
    iniciarTimer();
}

iniciarTimer();




