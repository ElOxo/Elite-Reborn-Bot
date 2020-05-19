module.exports = {
	name: 'avatar',
	description: 'Dieser Befehl gibt dir das Avatar Icon von dir oder eines getaggten Nutzers.',
	aliases: ['icon', 'pfp'],
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Dein Avatar Icon: <${message.author.displayAvatarURL}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s Avatar Icon: <${user.displayAvatarURL}>`;
		});

		message.channel.send(avatarList);
	},
};