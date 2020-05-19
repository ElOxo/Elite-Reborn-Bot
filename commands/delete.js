module.exports = {
	name: 'delete',
	description: 'Lösche bis zu 99 Nachrichten.',
	guildOnly: true,
	execute(message, args) {

		if (message.member.roles.has('697424990592696350')) {
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
		else {
			message.channel.send('Du hast keine Rechte um diesen Befehl zu nutzen!!!');
		}
	},
};