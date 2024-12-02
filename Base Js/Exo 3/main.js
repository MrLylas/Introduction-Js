
const squares = document.querySelectorAll('.square');
const keyAnim = document.querySelector('.animat');

squares.forEach(box => {
    box.addEventListener('click', function(){

        animation(box);
    })
});



function animation(box){
    if(box.classList.contains('animat')){
        
        box.classList.remove('animat');
        
    }else{
        box.classList.add("animat");
        
    }

}

