module.exports = {
	name: 'avatar',
	description: 'Dieser Befehl gibt dir das Avatar Icon von dir oder eines getaggten Nutzers.',
	aliases: ['icon', 'pfp'],
	guildOnly: true,
	execute(message) {
		// teamBOT BOTCOMMANDS TESTBOTCOMMANDS
		if (message.channel.id == 696823527214415992 || message.channel.id == 704840502813524008 || message.channel.id == 712209760178405376) {
			if (!message.mentions.users.size) {
				return message.channel.send(`Dein Avatar Icon: <${message.author.displayAvatarURL}>`);
			}

			const avatarList = message.mentions.users.map(user => {
				return `${user.username}'s Avatar Icon: <${user.displayAvatarURL}>`;
			});

			message.channel.send(avatarList);
		}

	},
};