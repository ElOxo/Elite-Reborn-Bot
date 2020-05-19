module.exports = {
	name: 'user-info',
	description: 'Erwähne einen Nutzer um Informationen über ihn zu erhalten.',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Du musst einen Nutzer erwähnen um Informationen zu erhalten!');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`Dein Nutzername: ${taggedUser.username}\nDeine ID: ${taggedUser.id}`);
	},
};