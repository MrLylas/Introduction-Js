// Importer le fichier quotes

import {quotes} from './quotes.js'

// Définir la constante contenant nos citations

    const quotesContainer = document.querySelector('.container');
    
    //Application d'un forEach sur chaque citations : 

            quotes.forEach(quote=> {

                // Création de div pour chaque citation

                const quoteBox = document.createElement('div');

    //associer Auteur à quoteBox

                quoteBox.classList.add('quotes')
                    const authorBox = document.createElement('h3');
                        const authorText = document.createTextNode(quote["author"]);
                        quoteBox.appendChild(authorBox);
                        authorBox.appendChild(authorText);

    //associer citation à quoteBox

                    const contentBox = document.createElement('p');
                        const contentText = document.createTextNode(quote["content"]);
                        quoteBox.appendChild(contentBox);
                        contentBox.appendChild(contentText);

    //associer Titre à quoteBox
                        
                    const textBox = document.createElement('p');
                        const titleText = document.createTextNode(quote["title"]);
                        quoteBox.appendChild(textBox);
                        textBox.appendChild(titleText);

    //Implanter quoteBox à quotesContainer

                quotesContainer.appendChild(quoteBox);

                
            }); 

    //Bouton fav

            const favButtons = document.querySelectorAll('.favBtn')

    //ajout de la fonction click sur le favbutton

            favButtons.forEach(favButton => {
                favButton.addEventListener('click',function(){
                    like(favButton);
                });

        });
        
            console.log(authorText);

    //Si favButton est cliqué 

            function like(favButton){
                if(favButton.classList.contains('fa-solid')){
                    favButton.class.replace('fa-regular','fa-regular');
                    favButton.class.remove('favorite');
                }else{
                    favButton.class.replace('fa-regular','fa-regular');
                    
                }
            }

<i class="fa-regular fa-heart"></i>