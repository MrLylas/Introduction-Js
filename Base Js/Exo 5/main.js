

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
                        const favButton = document.createElement('i');
                        favButton.classList.add('favButton');
                        quoteBox.appendChild(favButton);

                        //Si Citation 

                        if(localStorage.getItem(quote["id"]) !== null){
                            favButton.classList.add('fa-solid');
                            favButton.classList.add('fa-heart');
                            favButton.classList.add('active');
                        }else{
                            favButton.classList.add('fa-regular');
                            favButton.classList.add('fa-heart');
                        }
                        
                        favButton.addEventListener('click',function(){
                            if (quoteBox.classList.contains('active')){
                                favButton.classList.remove('fa-solid')
                                favButton.classList.add('fa-regular')
                                quoteBox.classList.remove('active')
                                localStorage.removeItem(quote['id'])
                            }else{
                                favButton.classList.remove('fa-regular')
                                favButton.classList.add('fa-solid')
                                quoteBox.classList.add('active')
                                localStorage.setItem(quote["id"],quote["author"] + ": " + quote["content"]);
                            }
                    });
            }); 

                
                
                
                
