module.exports = {
	name: 'prune',
	description: 'Prune up to 999 messages.',
	guildOnly: true,
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 1000) {
			return message.reply('you need to input a number between 1 and 99.');
		}
		if (message.member.roles.has('697424990592696350')) {
			message.channel.bulkDelete(amount, true).catch(err => {
				console.error(err);
				message.channel.send('there was an error trying to prune messages in this channel!');
			});
		}
		else{
			message.channel.send('u don\'t have the permission to do that!!!');
		}
	},
};