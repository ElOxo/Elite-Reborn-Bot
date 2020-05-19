const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "reborn!";

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith(prefix)) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(prefix.length()) // Remove the leading 
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
        case "Dark":
            darkAuction(receivedMessage);
            break;
        case "dark":
            darkAuction(receivedMessage);
            break;
        default:
            receivedMessage.channel.send("Unbekannter Befehl. Der Befehl `!Help` gibt dir eine Übersicht der verfügbaren Befehle.");
            break;
    }
}

function helpCommand(receivedMessage) {    
        receivedMessage.channel.send("'!help' Für die Übersicht der Befehle \n '!dark' Für die verbleibende Zeit bis zur nächsten Dark Auction");
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

client.login("process.env.BOT_TOKEN");//BOT_TOKEN is the Client Secret