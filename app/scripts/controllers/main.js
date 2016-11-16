'use strict';
angular.module('deckOcardsApp')
  .controller('MainCtrl', function ($scope) {


// Make card
function makeCard (rank, suit) {
	let tempSuit = '';
	console.log(suit)
	switch(suit){
		case "clubs" : tempSuit = 'C'
			break;
		case "diamonds" : tempSuit = 'D'
			break;
		case "hearts" : tempSuit = 'H'
			break;
		case "spades" : tempSuit = 'S'
			break;
	}
    this.suit = suit;
    this.rank = rank;
    return this.link = "https://deckofcardsapi.com/static/img/" + this.rank + tempSuit + ".png";

}; 

// CreateDeck
var deck = new Array(52);

function createDeck() {
    let ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "J", "Q", "K");
    let suits = new Array("clubs", "diamonds", "hearts", "spades");
    for (let i = 0; i < suits.length; i++) {
        for ( let j = 0; j < ranks.length; j++) {
            deck[i*ranks.length + j] = new makeCard(ranks[j], suits[i]);
        }
    }
};


// Shuffle Deck
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

// Run
createDeck();
shuffle(deck);

$scope.reShuffle = function reShuffle(){

createDeck();
shuffle(deck);
}
$scope.deck = deck;
  });
