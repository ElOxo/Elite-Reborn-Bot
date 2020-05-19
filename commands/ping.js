module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message) {
		// teamBOT BOTCOMMANDS TESTBOTCOMMANDS
		if (message.channel.id == 696823527214415992 || message.channel.id == 704840502813524008 || message.channel.id == 712209760178405376 || message.channel.type === 'dm') {
			message.channel.send('Pong.');
		}
	},
};