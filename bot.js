const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "reborn!"

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith(prefix)) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
   
    const args = receivedMessage.content.slice(prefix.length).split(' ');
    const command = args.shift().toLowerCase();

    switch (command){
        case "help":
            helpCommand(receivedMessage);
            break;
        case "dark":
            darkAuction(receivedMessage);
            break;
        default:
            receivedMessage.channel.send("Unbekannter Befehl. Der Befehl `!help` gibt dir eine Übersicht der verfügbaren Befehle.");
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



 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret