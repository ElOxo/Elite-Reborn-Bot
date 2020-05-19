module.exports = {
	name: 'kick',
	description: 'Erwähne einen Nutzer und Kicke ihn (but not really).',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Du musst einen Nutzer erwähnen um ihn zu kicken!');
		}
		const taggedUser = message.mentions.users.first();
		if (message.member.roles.has('697559808424804395') || message.member.roles.has('696828765996580984')) {
			message.channel.send(`Möchtest du den Nutzer kicken: ${taggedUser.username}`);
		}
		else{
			message.channel.send('Nur Nutzer mit der Rolle Owner und Dev können diesen Befehl nutzen!');
		}
	},
};