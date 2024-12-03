
let quotes = {
    "Serge Karmarov":"Barrez vous ***** de mimes.",
    "Georges Abitbol":"Le train de tes injures roule sur le rail de mon indifférence.",
    "Hubert Bonisseur de la Bath":"Ca ne prenait pas beaucoup plus de temps.",
    "Moulinier":"L'habit ne fait pas le moine, mais il fait l'agent...Même non titularisé.",
    "Orson Welles":"C'est du vol c'est du plagiat. J'aime pas trop les voleurs et..."
    };

     
    const quotesContainer = document.querySelector('.container');
    const citation = document.querySelector('.quotes');
    const auteur = document.querySelector('.author');


    function displayAuthor(){
        for(let auteurs in quotes){
            // citations
            const citationElement = document.createElement('p');
            citationElement.classList.add('quotes');
            // auteurs
            const auteurElement = document.createElement('p');
            auteurElement.classList.add('author');
            
            citationElement.innerHTML = `${quotes[auteurs]}`;
            auteurElement.innerHTML = `${auteurs}`;

            quotesContainer.appendChild(citationElement);
            quotesContainer.appendChild(auteurElement);
            }
        };
    
    displayAuthor();