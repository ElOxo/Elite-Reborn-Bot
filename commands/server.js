module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	guildOnly: true,
	execute(message) {
		// teamBOT BOTCOMMANDS TESTBOTCOMMANDS
		if (message.channel.id == 696823527214415992 || message.channel.id == 704840502813524008 || message.channel.id == 712209760178405376) {
			message.channel.send(`Server name: ${message.guild.name}\nMitgliederanzahl: ${message.guild.memberCount}`);
		}
	},
};