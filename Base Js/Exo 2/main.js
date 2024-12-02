// On définit nos variables :

//Pour récuperer les valeurs des carrés :

const bouton = document.querySelectorAll('.square');

//Le carré modifiable et son texte.

const squareCol = document.querySelector('.modified');
const squareTxt = document.querySelector('.modifiedTxt');

//Fonction for each pour récuperer toutes les valeurs pour chaque carré

bouton.forEach(btn => {
        btn.addEventListener('click', function(){//evenement click sur notre btn

            //Récuperation des valeurs des carrés 
            let squareStyle = window.getComputedStyle(btn);
            let backgroundStyle = squareStyle.getPropertyValue('background-color');
            
            //Association des valeurs au carré modifiable 
            squareCol.style.backgroundColor = backgroundStyle;
            squareTxt.textContent = backgroundStyle;
         }
)});





