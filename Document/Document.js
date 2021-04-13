'use strict';
(function() {

function Document(titre, numEnreg) {
  this.titre = titre;
  this.numEnreg = numEnreg;
}

function Livre(auteur, pages) {
  this.auteur = auteur;
  this.pages = pages;
  this.nbPages = function nbPages(){
    switch(this.pages) {
      case this.pages <= 100:
        display("ce livre a entre 0 et 100 pages");
        break;
      case this.pages <= 200:
        display("ce livre a entre 101 et 200 pages");
        break;
      case this.pages <= 300:
        display("ce livre a entre 201 et 300 pages");
        break;
      default:
        display("ce livre a plus de 300 pages !");
        break;
    }
  }
}

function Revue(titre, numEnreg, mois, annee) {
  Document.call(this, numEnreg);
  this.mois = mois;
  this.annee = annee;
}

function Dictionnaire(titre, numEnreg, langue) {
  Document.call(this, numEnreg);
  this.langue = langue;
}

Livre.prototype = Object.create(Document.prototype);
Revue.prototype = Object.create(Document.prototype);
Dictionnaire.prototype = Object.create(Document.prototype);

let pages = prompt("Combien de pages ?");
let book = new Livre("test", parseInt(pages));
console.log(book.pages);
book.nbPages();
})();
