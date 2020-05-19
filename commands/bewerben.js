module.exports = {
	name: 'bewerben',
	description: 'Sende deine Bewerbung ',
	guildOnly: true,
	execute(message) {
		message.channel.send('!p https://www.youtube.com/watch?v=7n4gCK9joME')
        message.reply('Du hast einen Kleinen Pimmel.')
	},
};