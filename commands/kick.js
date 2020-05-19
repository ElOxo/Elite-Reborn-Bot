module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
		const taggedUser = message.mentions.users.first();
		if (message.member.roles.has('697559808424804395') || message.member.roles.has('696828765996580984')) {
			message.channel.send(`You wanted to kick: ${taggedUser.username}`);
		}
		else{
			message.channel.send('Only Owner and Devs can use that!');
		}
	},
};