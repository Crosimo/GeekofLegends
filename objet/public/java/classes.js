
let enigme1;
let enigme2;
let enigme3;

class Boss {
    constructor(nom, pv, att, essais) {
        this.nom = nom;
        this.pv = Math.floor(pv);
        this.att = att;
        this.enigme = pv*0.2;
        this.essais = essais;
        this.attRand = [
        ];
    }
    enigma(heros) {

        let randomise = Math.floor(Math.random() * 3)
        let arr = [enigme1 = 'Quel heure est-il ?(écriture informatisée)', enigme2 = "Quel est l'indice du premier 'i' de cette question", enigme3 = 'Que fait retourne Math.floor(1.3 * 10) ?'][randomise];
        
        let decision = prompt(arr);
        let decisionF= decision.toLowerCase().split(' ').join('');
        // arr[1]= arr[1].toLowerCase().split(' ').join('');
        // arr[2] = arr[2].toLowerCase().split(' ').join('');
        if (decisionF == 11 || decisionF == 13 || decisionF =='noidea') {
            this.pv = 0;
            alert(`GODDAMN, answering this enigma just brought ${this.nom} pv to ${this.pv}, you just killed the boss myman`);
        } else {
            while (this.essais > 0) {
                decision = prompt(arr);
                decisionF = decision.toLowerCase().split(' ').join('');
                if (decisionF == 11 || decisionF == 13 ) {
                    this.pv = 0;
                    alert(`GODDAMN, answering this enigma just brought ${this.nom} pv to ${this.pv}, you just killed the boss myman`);
                    this.essais = 0;
                    console.log(this);
                } else{
                    this.essais--;
                    if (this.essais <= 0) {
                        alert('Your three heroes just died my man')
                        heros.splice(0);
                    }
                }
            }  
        }
        
        
    }
    attaque(ennemi)
    // ennemi sera l'array des héros mon reuf, archer, puis guerrier, puis mage
    {
        if (this.attRand.length === 0) {
        
        } else {
            let accumulator = this.attRand.reduce(function (acc, elem) {
                return acc + elem
            },0);
            let chiffre = Math.floor(Math.random() * accumulator)
            let ennemiN;
            if (this.attRand[0] > chiffre) {
                ennemiN = ennemi[0];
                
            } else if ((this.attRand[0] + this.attRand[1]) > chiffre) {
               ennemiN = ennemi[1];
            } else {
                ennemiN = ennemi[2];
            }
            ennemiN.pv -= this.att;
            if (ennemiN.pv < 0) {
                
                alert(`${ennemiN.nom} is dead`)
                this.attRand.splice(this.attRand.indexOf(ennemiN.chance), 1);
                ennemiN.pv = 0;
                console.log(`${this.nom} vient de mettre une sale attaque à ${ennemiN.nom} les pvs du héros sont à ${ennemiN.pv}`);
                ennemi.splice(ennemi.indexOf(ennemiN), 1)
            }
        } 
    }
       
  
}




class Heros {
    constructor(nom, pv, att, chance) {
        this.nom = nom;
        this.pv = pv;
        this.att = att;
        this.chance = chance;
        
        
    }
    meurtre(ennemi) {
        ennemi.attRand.splice(ennemi.attRand.indexOf(this.chance), 1, this.chance * 2);
        console.log(ennemi.attRand);
        
    }
}

let enrage;
class Guerrier extends Heros {
    constructor(nom, pv, att, chance, rage) {
        super(nom, pv, att, chance);
        this.rage = rage;
        

    }
    fanatisme() {
        this.rage += 1;
        if (this.rage === 4) {
            this.att *= 1.25;
            return enrage = true;
        } 
    }
    attaque(ennemi) {
        
        this.att *= 1.4;
        this.pv *= 0.75;
        this.fanatisme();
        ennemi.pv -= this.att;
        if ( enrage == true) {
            this.att /= 1.25;
            this.rage = 0;
        }
        else if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
       
    }
    defense(ennemi){
        this.att / 2;
        this.pv * 2.5;
        this.fanatisme();
        ennemi.pv -= this.att;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
        this.meurtre(ennemi);
    }
    normal(ennemi) {
        this.fanatisme();
        ennemi.pv -= this.att;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }   
    }
    
}
let guerrier = new Guerrier('guerrier', 4000, 110, 3, 0);
let mana = [7, 9, 11];

class Mage extends Heros {
    constructor(nom, pv, att, chance, mana) {
        super(nom, pv, att, chance);
        this.mana = mana[Math.floor(Math.random() * mana.length)];

    }
    attaque(ennemi) {
        console.log(this.mana);
        this.att *= 1.4;
        this.pv *= 0.75;
        this.mana -= 2;
        if (this.mana > 0) {
            ennemi.pv -= this.att;
        } else {
            this.mana = 7;
        }
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
        
    }
    defense(ennemi){
        this.att / 2;
        this.pv * 2.5;
        ennemi.pv -= this.att;
        ennemi.meurtre * 2;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
        this.meurtre(ennemi);
    }
    normal(ennemi) {
        ennemi.pv -= this.att;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }   
    }
}
let mage = new Mage ('mage', 1500, 100,4, mana)


let carquois = [7, 8, 9, 10, 11];
class Archer extends Heros {
    constructor(nom, pv, att, chance, fleches) {
        super(nom, pv, att, chance);
        this.fleches = fleches[Math.floor(Math.random() * fleches.length)];
        
    }
    
    attaque(ennemi) {
        this.att *= 1.4;
        this.pv *= 0.75;
        this.fleches -= 2;
        if (this.fleches < 0) {
            this.fleches += 2;
            
        } else {
            ennemi.pv -= this.att;
        }
        this.fleches += 1;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
        
        console.log(this.fleches);
    }
    defense(ennemi){
        this.att / 2;
        this.pv * 2.5;
        ennemi.meurtre * 2;
        ennemi.pv -= this.att;
        this.fleches -= 2;
        if (this.fleches < 0) {
            this.fleches += 2;
            
        } else {
            ennemi.pv -= this.att;
        }
        this.fleches += 1;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
        this.meurtre(ennemi);
        console.log(this.fleches);
    }
    normal(ennemi) {
        ennemi.pv -= this.att;
        this.fleches -= 2;
        if (this.fleches < 0) {
            this.fleches += 2;
            
        } else {
            ennemi.pv -= this.att;
        }
        this.fleches += 1;
        if (ennemi.pv < ennemi.enigme) {
            ennemi.enigma(heros);
        }
        console.log(this.fleches);
    }
}
let archer = new Archer ('archer', 1500, 50, 2, carquois)
let heros = [archer, guerrier, mage];
let boss1;
let boss2;
let boss3;


let boss = [boss1 = new Boss('Sauron', 2500, 125, 2),
boss2 = new Boss('Chronos', 3500, 125, 2),
    boss3 = new Boss('Lilith', 2800, 175, 2)][Math.floor(Math.random() * 3)];

export { archer, boss, mage, guerrier };
export { heros };