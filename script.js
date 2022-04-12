let Player1, Player2, laMain, newGame;
// si on clique sur le bouton newGame, les scores sont initialisées a zero
// la main est donner au 1er joueur

//init();

//Selectionner le bouton rollDice, évenement au click:

let rollDice = document.querySelector('.rollDice');
rollDice.addEventListener('click', ()=> {

    // généner un nombre aléatoire entre 1 et 6
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    // selectionner redDice et afficher le dé dynamiquement avec animation  
    let redDice = document.querySelector(".dé");
    redDice.style.display = "block";
    redDice.src ="images\dice-" + dice + ".png";
    // Si le nombre est suppérieur à 1 alors on ajoute le résultat du dé au score player (round)
    // Sinon ( égal à 1) le score round est remis a zero et c'est la fin de son tour. Le joueur 2 peut jouer


}); 

// Au clic du bouton Hold, les points round du joueur sont envoyés dans le global (scorePlayer -> current)
// C'est au tour de l'autre joueur de jouer

// si un joueur arrive à 100 points au current 
// alors une alerte se déclenche et indique que la parti est gagné part ... 
// Ainsi que la parti est terminer, il n'est plus possible de jouer.
