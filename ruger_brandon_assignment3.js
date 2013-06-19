//alert("JavaScript works!");

// Brandon Ruger
// SDI 1306
// Project 3

// Global Variables

var json = {
    "tellers":[ // Property: Array
        {
            "tellerFirstName": "Britney",
            "tellerLastName": "Stevens"
        },
        {
            "tellerFirstName": "Abigail",
            "tellerLastName": "Bruce"
        },
        {
            "tellerFirstName": "Michelle",
            "tellerLastName": "Stanford"
        }
    ]
};

var bankLocation = "Main Street";
var bankName = "Wells Fargo";
var bankRobber = {
    height: "6 feet 2 inches", // Property: String
    "skin color": "black",
    age: 30, // Property: Number
    mask: true, // Property: Boolean
    gloves: true,
    gun: false
    
};

var vaultCombo = {
    firstPart: "145",
    secondPart: "982",
    thirdPart: "143",
    getCombo: function(){ // Method: Function
        var finalCombo = this.firstPart + this.secondPart + this.thirdPart;
        
        return finalCombo // Return string
    }
};

var copsWhoShowUp = ["Officer Jones", "Officer Ryder", "Officer Montgomery"];

var baitStrap = function(){
    
};

var strangeBox = {
    height: 1,
    width:  2,
    length: 3,
    getArea: function(){ // Method: Accessor
        var totalArea = this.height * this.width * this.length; // Math
        
        return totalArea;
    } // End method accessor
};





// Functions

// Boolean Argument
var wasBankRobbed = function(){
    if (bankRobber.mask === true) {
        console.log("I think he's going to rob us! - Shouted one of the employees.");
        if (bankRobber.gun === true) { //Nested conditional
            console.log("He's got a gun!");
        } else {
                console.log("Just stay calm. Give him whatever he asks for and we will all be okay.");
        };
        return true; // Return Boolean
    } else {
        console.log("He is probably just looking for help. Let's see what he needs.");
        return false;
    };
}; // end function



// Number Argument
var getMoneyStolen = function (howMuchMoney){
    if (howMuchMoney < 1000) { // Conditional
        console.log("He stole less than $1,000 dollars.");
    } else {
        console.log("He stole more than $1,000 dollars.");
    }
    return howMuchMoney; // Return Number
}; // end function



// Array Function
var whichOfficersArrived = function(copsWhoShowUp){
    console.log("The following officers arrived at the scene: " + copsWhoShowUp + ".")// Array argument
    return whichOfficersArrived; // Return Array
}; // end function




// String Argument




// Object Argument
var robAtmMachine= function(whatATM)


    


// Main Code

console.log("I was covering a shift at " + bankName + " bank on " + bankLocation + " when we noticed a strange man walking around the building.");
console.log("There had been a lot of local bank robberies lately, so all of my co-workers were on edge.");
console.log("The tellers working that day were " + json.tellers[0].tellerFirstName + ", " + json.tellers[1].tellerFirstName + ", and " +
            json.tellers[2].tellerFirstName + ".");
var areWeGettingRobbed = wasBankRobbed();
console.log("It's " + areWeGettingRobbed + " that we got robbed.");


console.log("Here was his description:");

// For Loop

for (var key in bankRobber) {
    console.log(key + ":" + bankRobber[key]);
};

var moneyStolen = getMoneyStolen(5000);
console.log("He stole " + moneyStolen + " dollars.");

// End for loop

// More Main Code

console.log("The robber forced us to open the vault. The vault combination was broken into 3 distinct parts, divided up amongst 3 staff members.");
console.log(json.tellers[0].tellerFirstName + " had the first part of the combination.");
console.log(json.tellers[2].tellerFirstName + " had the second part of the combination.");
console.log(json.tellers[1].tellerFirstName + " had the third and final part of the combination.");
var whatIsCombo = vaultCombo.getCombo();
console.log("When they put them together, they get the final combo, " + whatIsCombo + ".");


console.log("He also forced us to unlock the ATM machine.");

var sizeOfBox = strangeBox.getArea();
console.log("Before he left, he left a strange box that he claimed contained an explosive device.");
console.log("The area of the box was approximately " + sizeOfBox + " feet.");


console.log("We rang the alarm to alert the cops that we needed help.");
console.log("The police called us and said there were 3 officers close by who should be arriving momentarily.");
var cops = whichOfficersArrived(copsWhoShowUp);









            