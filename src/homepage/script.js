setTimeout( () => {

    const siteMenuButtons = document.getElementById("siteMenuButtons");
    const exitMenuButton = document.getElementById("exitMenuButton");
    const pitButton = document.getElementById("pitButton");
    for(const button of siteMenuButtons.children){
        button.addEventListener("click", menuPopupAct);
    };
    pitButton.addEventListener("click", () => {
        document.location = "/pitScouting/";
    });
    exitMenuButton.addEventListener("click", menuPopupActR);
    
}, 1000);

function menuPopupAct(){
    const menuPopup = document.getElementById("menuPopup");
    menuPopup.showModal();
    menuPopup.style.animation = 'menuIn 0.7s forwards';
}

function menuPopupActR(){
    const menuPopup = document.getElementById("menuPopup");
    menuPopup.style.animation = 'menuOut 0.7s forwards';
    setTimeout(() => {
        menuPopup.close();
    }, 700)
}
