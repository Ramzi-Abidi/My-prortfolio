function somewhere(ch) {
    document.querySelector(ch.dataset.tech).scrollIntoView({
        behavior:"smooth"
    }) ;
}


const links=document.querySelectorAll(".navbar .list li a") ;
links.forEach(link => {
    link.addEventListener("click",(e)=>{
        e.preventDefault() ;
        somewhere(e.target) ;
    });
});

function openMenu() {
    list=document.querySelector(".list") ;
    
    list.classList.toggle("open-menu") ;
}

hambur=document.querySelector(".hamburger") ;
hambur.addEventListener("click",()=>{
    hambur.classList.toggle("active") ;
    openMenu() ;
});

OpenMenu=document.querySelector(".list") ;
//Any click outside the box :
document.addEventListener("click",(e)=>{
    if (OpenMenu.classList.contains("open-menu"))
        if (e.target!=hambur && e.target!=OpenMenu) {
            hambur.classList.toggle("active") ;
            OpenMenu.classList.toggle("open-menu") ;
        }
})

function ScrollAnim(content,ActiveApply) {
    window.addEventListener("scroll",()=>{           
    let contentPos=content.getBoundingClientRect().top ;
    let screenPos=window.innerHeight/1.5;
    if (contentPos<screenPos)
        ActiveApply.classList.add("active") ;
        else
            ActiveApply.classList.remove("active") ;
}) ;
}

//scroll animation :
content=document.querySelector(".holder") ;
ActiveApply=document.querySelector(".holder .content") ;

ScrollAnim(content,ActiveApply) ;




//Animations using GSAP 3.0 :
gsap.from(".navbar",{duration:1,y:"-100%",ease:"bounce"}) ;

gsap.from(".links",{duration:2,opacity:0}) ;

gsap.from(".logo",{duration:2,opacity:0}) ;

gsap.from(".intro",{duration:1,x:"-100vw",delay:1}) ;

gsap.from(".front-end-dev",{duration:1,x:"200vw",delay:1.5})