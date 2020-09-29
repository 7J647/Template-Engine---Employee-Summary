//take in character 
//give that character a weapon based on character type
//then we want to send them on an adventure
//then give them a clan

// 1. bobbadook
//2. james bond
//3. goku

function (whatIsYourName(name) {
    if (name === "bobbadook") {
        bobbadook();
        //manaager

    } else if (name ==="james bond"){
        james()
        //engineer
    }
    else {
        goku();
        //intern
    }
})

function bobbadook() {
    laser();
    //generate manager
}

function james() {
    spyCar();
    //generate engineer
}
function goku() {
    kamehameha();
    //generate intern
}

function(laser) {
    whatIsYourInfo()
    console.log("adventure ends quickly cause there's a hole in the enemy");
    laserClan();
}

function(spyCar) {
    console.log("adventure ends quickly cause james hits them with his car");
    carClan();
}

function(spyCar) {
    console.log("adventure ends quickly cause goku blows up the planet");
    turtleClan();
}

function laserClan() {
    console.log("laser clan");
}

function carClan() {
    console.log("car clan");
}

function turtleClan() {
    console.log("turtle clan");
}
//maybe below
function whatIsYourInfo
whatIsYourName(process.argv[2]);
//giving the function one piece of information