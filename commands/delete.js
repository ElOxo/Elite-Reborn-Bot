module.exports = {
	name: 'delete',
	description: 'Lösche bis zu 99 Nachrichten.',
	guildOnly: true,
	execute(message, args) {
	
		if (message.member.roles.has('697424990592696350')) {
			if(args[0]=='all'){
				if (message.member.roles.has('697559808424804395') || message.member.roles.has('696828765996580984')) {
					async () => {
						let fetched;
						do {
						  fetched = await channel.fetchMessages({limit: 100});
						  message.channel.bulkDelete(fetched);
						}
						while(fetched.size >= 2);
					  } 
				}else{
					message.channel.send("Nur Owner können das!!!")
				}
				
				
			}
			else{
				const amount = parseInt(args[0]) + 1;
				if (isNaN(amount)) {
					return message.reply('Das ist keine gültige Anzahl an Nachrichten');
				} else if (amount <= 1 || amount > 100) {
					return message.reply('Bitte wähle eine Anzahl zwischen 1 und 99 Nachrichten');
				}
				message.channel.bulkDelete(amount, true).catch(err => {
					console.error(err);
					message.channel.send('Fehler beim Löschen der Nachrichten!');
				});
			}
		}
		else {
			message.channel.send('Du hast keine Rechte um diesen Befehl zu nutzen!!!');
		}
	},
};