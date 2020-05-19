module.exports = {
	name: 'bewerben',
	description: 'Sende deine Bewerbung ',
	guildOnly: true,
	execute(message) {
		// teamBOT BOTCOMMANDS TESTBOTCOMMANDS
		if (message.channel.id == 696823527214415992 || message.channel.id == 704840502813524008 || message.channel.id == 712209760178405376) {
			message.reply("Dein Bewerbungsgepräch wird in einer DM gestartet.")
		}
	},
};