// let friendo = {
//     nom : 'Deborsu',
//     prenom : 'Jean',
//     age: '25ans',
//     mail: 'jean.deborsu@hotmail.com',
//     objet : this,
// }



// let friendo2 = {
//     nom,
//     age,
//     meth() {
//         let year = prompt('Quel est ton âge?')
//         this.age = year;
//         alert(`vous avez ${this.age}`)
//     }
// }



// let perso = {
//     nom: 'JEAN',
//     prenom: 'Deborsu',
//     argent: 10,

// }

// let article = {
//     nomProduit : 'raisin',
//     prix : 5,
//     stock: 7,
//     acheter(perso, nombre) {
        
//         if (this.stock < nombre || perso.argent < nombre*this.prix) {
//             alert('toomuch')
//         } else {
//             this.stock -= nombre;
//             perso.argent -= (nombre*this.prix)
//         }
//        console.log(perso.argent); 
        
//     }
// }

// article.acheter(perso, 3)

// find method and finIndexMethod, for the splice we need the INdex, where do we find it ? yeah you guessed.


// Use preventDefault

// Apply use an array of arguments, not individually, great difference with call. Bind does not immediatly call the function, it returns a new one, with the thing bound.

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);

// // you just bind it once anx then you may do what you like all the time
// bookEW(23, "Steven Williams");



// // but we may bind even more, we use partial application


// const bookEW23 = book.bind(eurowings, 23);


// with eventlisteners


// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23)



// class Lieu {
//     constructor(nom, personnes) {
//       this.nom = nom;
//       this.personnes = personnes;
//     }
//   }
  
//   class Personne {
//     constructor(nom, prenom, argent, positionActuelle) {
//       this.nom = nom;
//       this.prenom = prenom;
//       this.argent = argent;
//       this.positionActuelle = positionActuelle;
//       this.positionActuelle.personnes.push(this);
//     }
  
//     seDeplacer(bus, heure, tabLieux) {
//       this.positionActuelle.personnes.splice(
//         this.positionActuelle.personnes.indexOf(this),
//         1
//       );
  
//       let destination = prompt("Ou voulez-vous allez?");
  
//       while (!tabLieux.includes(destination)) {
//         destination = prompt(
//           "Veuillez choisir entre les lieux suivant: 1)Maison 2)Molengeek 3)Snack. Attention à l'orthographe"
//         );
//       }
//       bus.embarquer(this);
//       // Si j'ai pu embarquer dans le bus
//       if (bus.personnes.includes(this)) {
//         alert(`${heure} Je suis dans le bus pour aller à ${destination}`);
//         bus.personnes.splice(bus.personnes.indexOf(this));
//       } else {
//         alert(`Je rentre à pied à ${destination} pour digérer`);
//       }
//       this.positionActuelle = new Lieu(destination, [this]);
//     }
//   }
  
//   class Bus {
//     constructor(personnes, caisses) {
//       this.personnes = personnes;
//       this.caisses = caisses;
//     }
  
//     embarquer(personne) {
//       if (personne.argent >= 2.8) {
//         if (confirm("Voulez-vous prendre le bus")) {
//           this.personnes.push(personne);
//           personne.argent -= 2.8;
//           this.caisses += 2.8;
//         } else {
//           alert("Pas de problème si vous préferez marcher. Bonne marche");
//         }
//       } else {
//         alert("Vous n'avez pas assez d'argent pour voyager en bus");
//       }
//     }
//   }
//   //instance Lieu
//   let molengeek = new Lieu("Molengeek", []);
  
//   let snack = new Lieu("Snack", []);
  
//   let maison = new Lieu("Maison", []);
  
//   //instance Personne
  
//   let elsonG = new Personne("hustler", "ElsonG", 30, maison);
  
//   //instance bus
//   let bus = new Bus([], 100);
  
//   let lieuxPossible = [molengeek.nom, snack.nom, maison.nom];
  
//   alert(`8h00 Vous êtes à la ${elsonG.positionActuelle.nom}`);
  
//   elsonG.seDeplacer(bus, "8h30", lieuxPossible);
  
//   alert(`8h45 je suis à ${elsonG.positionActuelle.nom}`);
  
//   alert(`12h45 je sors de ${elsonG.positionActuelle.nom}`);
  
//   elsonG.seDeplacer(bus, "12h45", lieuxPossible);
  
//   alert(`13h30 je sors du ${elsonG.positionActuelle.nom}`);
  
//   elsonG.seDeplacer(bus, "13h30", lieuxPossible);
  
//   elsonG.seDeplacer(bus, "17h30", lieuxPossible);


import { archer, boss, mage, guerrier } from "./classes.js";
import { heros } from "./classes.js"



console.log([..."Quel est l'indice du premier 'i' de cette question"].indexOf('i'));
console.log(Math.floor(1.3 * 10));


// let qui = prompt(`Choisi le nom de ${boss.nom}`);
// boss.nom = qui;



heros[0].nom;
heros[1].nom;
heros[2].nom;
let i = 0;
let distribution = 1500;
for (i in heros) {
    let lettre;
    if (heros[i].nom === 'archer') {
        lettre = "à l'";
    } else {
        lettre = 'au ';
    }
    let raiponce = prompt(`Quel nom donner ${lettre}${heros[i].nom}`)
    raiponce = raiponce.charAt(0).toUpperCase() + raiponce.slice(1);
    heros[i].nom = raiponce;


    let pdvPlus = prompt(`Combien de \n 1. pdv \n 2.att \n donner à ${heros[i].nom}, ${distribution} points disponibles \n écrivez comme ceci = \n chiffrePdv \n chiffreAtt`);
    let splot = pdvPlus.split(' ');
    let prems = parseInt(splot[0]);
    let dems = parseInt(splot[1]);
    while (splot.length < 2) {
        pdvPlus = prompt(`Vous n'avez pas mis 2 caractéristiques. Combien de \n 1. pdv \n 2.att \n donner à ${heros[i].nom}, ${distribution} points disponibles \n écrivez comme ceci = \n chiffrePdv \n chiffreAtt`);
        splot = pdvPlus.split(' ');
        prems = parseInt(splot[0]);
        dems = parseInt(splot[1]);
    }
    if (prems + dems > distribution) {
        pdvPlus = prompt(`Vous avez inséré trop de points, réessayez. Combien de \n 1. pdv \n 2.att \n donner à ${heros[i].nom}, ${distribution} points disponibles, écrivez comme ceci = \n chiffrePdv \n chiffreAtt`);
    } else {
        
        // faudra encore s'arranger pour que quelques choses se passe, lorsqu'il ne mette aucunes deuxième valeur
        let lower1 = splot[0].toLowerCase()
        let lower2 = splot[1].toLowerCase()
        
        if (lower1.includes('pdv')) {
            heros[i].pv += prems;
            heros[i].att += dems;
        } else {
            heros[i].pv += dems;
            heros[i].att += prems;
        }

        console.log(prems, dems);
        distribution -= (prems+dems)
    }
    
    
}


console.log(archer);
console.log(guerrier);
console.log(mage);

// let pdvPlus = () => {
    
//     let choix = prompt(`Combien de pdv donner à ${boss.nom}`);
//     boss.pdv += choix;
// }
// pdvPlus();






// >* L'utilisateur pourra choisir une posture 'attaque' ou 'défense' ou le mode 'normal' rien du tout avant le début du combat.
// >* Chaque tour les trois personnages attaque une fois le boss.
// >* Chaque tour le boss attaque au hasard un des personnages
// ​







// att, différence entre mode attaque/défence, et décider de vrmt attaquer ou défendre les gars

for (i in heros){
    boss.attRand.push(heros[i].chance)
}


let attDef;
let tour = (heros, boss) => {
    
    for (i in heros) {
        
        if (boss.pv <= 0 || !heros.includes(heros[i]) || heros.length == 0) {
            break;
        } else {
            
            attDef = prompt(`Vous êtes ${heros[i].nom}. Voulez-vous attaquer, défendre ou le mode normal?'`);
            // while (!(attDef == 'attaquer' || attDef == "défendre" || attDef == "normal")){
            //     attDef = prompt(`Vous n'avez pas choisi la bonne option. Vous êtes ${heros[i].nom}. Voulez-vous attaquer, défendre ou le mode normal?'`);  
            // }
            if (attDef.toLowerCase() === 'attaquer') {
                heros[i].attaque(boss);
                if (heros.length == 0) {
                    break;
                }
                console.log(`${heros[i].nom} vient de mettre une sale attaque à ${boss.nom} les pvs du boss sont à ${Math.floor(boss.pv)}`);
                heros[i].att /= 1.4; 
                heros[i].pv /= 0.75;
                
            
            } else if (attDef.toLowerCase() === 'défendre') {
                heros[i].defense(boss);
                if (heros.length == 0) {
                    break;
                }
                console.log(`${heros[i].nom} vient de mettre une sale attaque à ${boss.nom} les pvs du boss sont à ${Math.floor(boss.pv)}`);
                heros[i].att *= 2;
                heros[i].pv /= 2.5;
            } else if (attDef.toLowerCase() === 'normal') {
                heros[i].normal(boss);
                if (heros.length == 0) {
                    break;
                }
                console.log(`${heros[i].nom} vient de mettre une sale attaque à ${boss.nom} les pvs du boss sont à ${Math.floor(boss.pv)}`);
            }
        }
    }
    if (boss.pv <= 0 || heros.length == 0) {
        alert("it's all over");
       
    }
    
    
    else {
        boss.attaque(heros);
        if (heros.includes(heros[i])) {
            console.log(`${boss.nom} vient de mettre une sale attaque à ${heros[i].nom} les pvs du héros sont à ${heros[i].pv}`);
        }
    
    }
}

while (boss.pv > 0 && heros.length > 0) {
    tour(heros, boss);  
}




