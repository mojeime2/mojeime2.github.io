function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomize() {
    var survivors = {
        0 : "Acrid",
        1 : "Artificer",
        2 : "Bandit",
        3 : "Captain",
        4 : "Commando",
        5 : "Engineer",
        6 : "Huntress",
        7 : "Loader",
        8 : "Mercenary",
        9 : "MUL-T",
        10 : "Railgunner",
        11 : "REX",
        12 : "Void Fiend"
    };

    var random_choice = survivors[getRandomInt(13)];

    fetch('https://mojeime2.github.io/Survivors/'.concat(random_choice,".json"))
        .then((response) => response.json())
        .then((json) => update_fields(json));
}

function update_fields(json) {

    var name = json.survivor;
    var primary = json.primary[Math.floor(Math.random() * json.primary.length)];
    var secondary = json.secondary[Math.floor(Math.random() * json.secondary.length)];
    var utility = json.utility[Math.floor(Math.random() * json.utility.length)];
    var special = json.special[Math.floor(Math.random() * json.special.length)];
    
    document.getElementById("survivor").textContent = name;
    document.getElementById("primary").textContent = primary;
    document.getElementById("secondary").textContent = secondary;
    document.getElementById("utility").textContent = utility;
    document.getElementById("special").textContent = special;
    
    document.getElementById("survivor_img").src = "./Icons/".concat(name,"/",name,".jpg").replace(':', '');
    document.getElementById("primary_img").src = "./Icons/".concat(name,"/",primary,".jpg").replace(':', '');
    document.getElementById("secondary_img").src = "./Icons/".concat(name,"/",secondary,".jpg").replace(':', '');
    document.getElementById("utility_img").src = "./Icons/".concat(name,"/",utility,".jpg").replace(':', '');
    document.getElementById("special_img").src = "./Icons/".concat(name,"/",special,".jpg").replace(':', '');
    
    
    if (name == "MUL-T") {
        var MULT_primary = json.primary[Math.floor(Math.random() * json.primary.length)];
        document.getElementById("MUL-T_primary").textContent = MULT_primary;
        document.getElementById("MUL-T_primary_img").src = "./Icons/".concat(name,"/",MULT_primary,".jpg").replace(':', '');

        document.getElementById("MUL-T_primary").style.display = "block";
        document.getElementById("MUL-T_primary_img").style.display = "block";
    } else if (name == "Acrid") {
        var Acrid_passive = json.passive[Math.floor(Math.random() * json.primary.length)];
        document.getElementById("MUL-T_primary").textContent = Acrid_passive;
        document.getElementById("MUL-T_primary_img").src = "./Icons/".concat(name,"/",Acrid_passive,".jpg").replace(':', '');

        document.getElementById("MUL-T_primary").style.display = "block";
        document.getElementById("MUL-T_primary_img").style.display = "block";
    } else {
        document.getElementById("MUL-T_primary").style.display = "none";
        document.getElementById("MUL-T_primary_img").style.display = "none";
    }
    if (name == "Captain") {
        var Captain_special = json.special[Math.floor(Math.random() * json.special.length)];
        document.getElementById("Captain_special").textContent = Captain_special;
        document.getElementById("Captain_special_img").src = "./Icons/".concat(name,"/",Captain_special,".jpg").replace(':', '');

        document.getElementById("Captain_special").style.display = "block";
        document.getElementById("Captain_special_img").style.display = "block";
    } else {
        document.getElementById("Captain_special").style.display = "none";
        document.getElementById("Captain_special_img").style.display = "none";
    }

    

}