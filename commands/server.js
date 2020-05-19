module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	guildOnly: true,
	execute(message) {
		message.channel.send(`Server name: ${message.guild.name}\nMitgliederanzahl: ${message.guild.memberCount}`);
	},
};