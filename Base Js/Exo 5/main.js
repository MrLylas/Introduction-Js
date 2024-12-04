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

    //Implanter icone favoris

                const favButtons = document.createElement('i');
                favButtons.classList.add('favButton');
                favButtons.classList.add('fa-regular');
                favButtons.classList.add('fa-heart');
                quoteBox.appendChild(favButtons);
            }); 
                
                
                
                
                //Si click sur bouton favoris 
                
                const favButtons = document.querySelectorAll('.favButton');


                function like(favButton){
                    if(favButton.classList.contains('fa-solid')){
                        favButton.classList.replace('fa-solid','fa-regular');
                    }else{
                        favButton.classList.replace('fa-regular','fa-solid');   
                    }
                }
                
            
    // ajout de la fonction click sur le favbutton
            
                favButtons.forEach(favButton => {
                    favButton.addEventListener('click',function(){
                        like(favButton);
                    });
                });
            
