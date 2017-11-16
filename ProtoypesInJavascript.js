// remember that there are no classes in Javascript, everything inherits from objects

function MagicalHumanBeings() {
    this.name = "";
    this.health = 100;
    this.mana = 50;
    this.superHeal = function superHeal(targetHumanBeing) {
        targetHumanBeing.health += 100; // the other user is super happy at this point
        console.log("The target was healed by an additional 100 points");
        this.mana -= 10;                // healing comes at a price
    }
}

Arun = new MagicalHumanBeings();
Santosh = new MagicalHumanBeings();
Arun.name = "Arun";
Arun.superHeal(Santosh);
console.log("Santosh currently has " + Santosh.health + " health points!");

// now we can add new methods to our function
MagicalHumanBeings.prototype.youShallNotPass = function youShallNotPass(targetHumanBeing) {
    console.log(this.name + " is using up his/her full potential");
    targetHumanBeing.health -= 50;
    targetHumanBeing.health -= 20;
    this.health -= 10;
    this.mana -= 100;
}

Arun.youShallNotPass(Santosh);
console.log("Santosh has health = " + Santosh.health + " and also, he has mana = " + Santosh.mana);