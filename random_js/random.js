var noms = Array();

function add_nom(nom) {
  var nom=prompt("Saisir un nom");
  noms.push(nom);
}

function tirage() {
  if (noms.length != 0) {
    console.log(noms[Math.floor(Math.random(noms) * (noms.length))]);
  }
  else {
    console.log("Aucun nom n'est dans le tableau");
  }
}
