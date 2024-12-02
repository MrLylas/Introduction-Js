
const backGround = document.querySelector('body');
const keyColor = document.querySelectorAll('.reseau');
const keyBorder = document.querySelector('.animat');


keyColor.forEach(color => {
    color.addEventListener('click' ,function(){
        
        let btnColor = window.getComputedStyle(color);
        let backgroundStyle = btnColor.getPropertyValue('background-color');
        
        backGround.style.backgroundColor = backgroundStyle;

        animation(color);
    })
});

console.log(keyBorder);

function animation(color){
    if(color.classList.contains('animat')){
        
        color.classList.remove('animat');
        backGround.style.backgroundColor = "#808080"
        color.children[1].style.display = "none"
        
    }else{
        color.classList.add("animat");
        color.children[1].style.display = "flex"
    }

}
