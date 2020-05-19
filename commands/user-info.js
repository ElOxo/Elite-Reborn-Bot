module.exports = {
	name: 'user-info',
	description: 'Erwähne einen Nutzer um Informationen über ihn zu erhalten.',
	guildOnly: true,
	execute(message) {
		// teamBOT BOTCOMMANDS TESTBOTCOMMANDS
		if (message.channel.id == 696823527214415992 || message.channel.id == 704840502813524008 || message.channel.id == 712209760178405376) {
			if (!message.mentions.users.size) {
				return message.reply('Du musst einen Nutzer erwähnen um Informationen zu erhalten!');
			}
			const taggedUser = message.mentions.users.first();
			message.channel.send(`Dein Nutzername: ${taggedUser.username}\nDeine ID: ${taggedUser.id}`);
		}
	},
};