const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("!")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    switch (primaryCommand){
        case "Help":
            helpCommand(receivedMessage);
            break;
        case "help":
            helpCommand(receivedMessage);
            break;
        case "Time":
            getTime(receivedMessage);
            break;
        case "time":
            getTime(receivedMessage);
            break;
        case "Dark":
            darkAuction(receivedMessage);
            break;
        case "dark":
            darkAuction(receivedMessage);
            break;
        case "dmg":
            dmgCalc(receivedMessage,arguments);
            break;
        default:
            receivedMessage.channel.send("Unbekannter Befehl. Der Befehl `!Help` gibt dir eine Übersicht der verfügbaren Befehle.");
            break;
    }
}

function dmgCalc(receivedMessage,arguments){
    let dmg = 0;
    let weaponDmg = arguments[0];
    let Strenght = arguments[1]/ 5;
    let Strenght2 = arguments[1]/100;
    let CritDmg = arguments[2]/100;
    let CombatLvL = (arguments[3]*5);
    dmg=(5+parseInt(weaponDmg)+parseInt(Strenght))*(1+parseInt(Strenght2))*(1+parseInt(CritDmg))*(1+(parseInt(CombatLvL)/100));
    receivedMessage.channel.send("Dmg den du machst: "+dmg);
}


function helpCommand(receivedMessage) {    
        receivedMessage.channel.send("'!help' Für die Übersicht der Befehle \n '!time' Für die aktuelle Uhrzeit \n '!dark' Für die verbleibende Zeit bis zur nächsten Dark Auction \n '!dmg WaffenDMG Strenght CritDmg CombatLvL' Für das berechnen des neuen DMG");
}

function getTime(receivedMessage){
    var stunden, minuten
  var StundenZahl, MinutenZahl

  var heute = new Date()
  StundenZahl = heute.getHours()
  MinutenZahl = heute.getMinutes()
 
  stunden = StundenZahl+":";
  if (MinutenZahl < 10) {minuten = "0" + MinutenZahl + ":"}
    else {minuten = MinutenZahl }
  zeit = "Es ist" + stunden + minuten + " Uhr"
  receivedMessage.channel.send(zeit)
}

function darkAuction(receivedMessage){
    var stunden, minuten
    var StundenZahl, MinutenZahl
  
    var heute = new Date()
    StundenZahl = heute.getHours()
    MinutenZahl = heute.getMinutes()
   
    stunden = StundenZahl+":";
    if (MinutenZahl < 10) {minuten = "0" + MinutenZahl + ":"}
      else {minuten = MinutenZahl }
    var DarkAuctionTime =55
    if(minuten>DarkAuctionTime){
      var ZeitBisAuction=(60-minuten)+DarkAuctionTime;
      receivedMessage.channel.send("Dark Auction ist in " + ZeitBisAuction + " Minuten")
    }
    if (minuten<DarkAuctionTime) {
        var ZeitBisAuction=(DarkAuctionTime-minuten);
        receivedMessage.channel.send("Dark Auction ist in " + ZeitBisAuction + " Minuten")
    }
}



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret