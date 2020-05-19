module.exports = {
	name: 'user-info',
	description: 'Zeige Informationen über einen Nutzer an.',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Du musst einen Nutzer erwähnen um Informationen zu erhalten!');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`Dein Nutzername: ${taggedUser.username}\nDeine ID: ${taggedUser.id}`);
	},
};