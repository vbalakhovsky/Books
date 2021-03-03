// const db = require('../../models');
// const sequelize = require('sequelize');
// ​
// module.exports = (sequelize, DataTypes) => {
//     function card(club, user_name, favorite_book, suit){
// 	    this.club = club;
// 	    this.name = user_name;
//         this.favorite_book = favorite_book;
// 	    this.suit = suit;
//     };
// ​
//     function deck(){
//         this.club =  $(clubName);
// 	    this.user_name = $(firstName, lastName);
//         this.favorite_book = $(favoriteBook)
// 	    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
// ​
// 	    var cards = [];
    
//         for (var s = 0; s < this.suits.length; s++ ) {
//             for( var n = 0; n < this.names.length; n++ ) {
//                 cards.push( new card( n+1, this.names[n], this.suits[s] ) );
//             }
//         }
// ​
//         return cards;
//     };
// ​
//     // Test to see if deck prints out in consule
//     var myDeck = new deck();
//     console.log(myDeck);
// ​
//     window.onload = function() {
// ​
//         for(var i=0; i < myDeck.length; i++){
//             div = document.createElement('div');
//             div.className = 'card';
    
//             if(myDeck[i].suit == 'Diamonds'){
//                 var ascii_char = '♦';
//             } else {
//                 var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
//             }
    
//             div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
//             document.body.appendChild(div);
//         }
    
//     };
// }