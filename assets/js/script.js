const hamburgerMenu = document.querySelector(".hamburgerMenu")
const subHeader = document.querySelector(".subHeader")

function toggleMenu (){
    if (subHeader.style.display === "none"){
        subHeader.style.display = "flex"
    } else{
        subHeader.style.display = "none"
    }
}

hamburgerMenu.addEventListener('click',toggleMenu)





