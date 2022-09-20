document.getElementById("button-up").addEventListener("click", scrollUp);
document.getElementById("ir-arriba").addEventListener("click", onlyUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0 ) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 25));
        buttonUp.style.transform= "scale(0)";
    }
}

function onlyUp(){
    let currentScroll = document.documentElement.scrollTop;
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 50));
    buttonUp.style.transform= "scale(0)";
}

buttonUp = document.getElementById("button-up");
headerColor = document.getElementById("main-header")
menuMobile = document.getElementById("header-mobile")
menuDesktop = document.getElementById("header-desktop")
buttonSingIn= document.getElementById("account__sign-in")

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if (scroll < 300) {
        buttonUp.style.transform = "scale(0)";
        
    }
    else if(scroll > 300 && scroll < 800){
        buttonUp.style.transform = "scale(1)";
        headerColor.style.backgroundColor  = 'transparent'

        menuMobile.style.margin= "25px 5px 0px";

        menuDesktop.style.margin = "25px calc(8% - 1px) 0px";
        
        buttonSingIn.style.border = "1px solid var(--color_white)";

    }else if(scroll > 800){
        headerColor.style.backgroundColor  = '#E76F51'
        headerColor.style.transition  = '1.5s'
        headerColor.style.height = '50px'
        headerColor.style.color = 'black'
        menuMobile.style.margin= "5px 5px 0";
        menuMobile.style.transition  = '0.5s';
        menuDesktop.style.margin = "5px 5px 0px";
        menuDesktop.style.transition  = '0.5s';
        buttonSingIn.style.border = "none";
    }
}
