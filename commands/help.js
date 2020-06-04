const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Liste aller Befehle.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		if (message.channel.id == 696823527214415992 || message.channel.id == 704840502813524008 || message.channel.id == 712209760178405376 || message.channel.type === 'dm') {
			if (!args.length) {
				data.push('Bitte beachte, dass manche Befehle nur von Bestimmten Mitgliedern ausgeführt werden können. \n');
				data.push('Hier ist eine Liste mit allen Befehlen:');
				data.push(commands.map(command => command.name).join(', '));
				data.push(`\nSende \`${prefix}help [Befehl name]\` um erweiterte Informationen zum Befehl zu erhalten!`);

				return message.author.send(data, { split: true })
					.then(() => {
						if (message.channel.type === 'dm') return;
						message.reply('Ich habe dir eine DM mit allen Befehlen gesendet!');
					})
					.catch(error => {
						console.error(`Ich konnte keine Help Dm an  ${message.author.tag} senden.\n`, error);
						message.reply('Es sieht so aus als könnte ich dir keine DMs senden!');
					});
			}

			const name = args[0].toLowerCase();
			const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

			if (!command) {
				return message.reply('Dieser Befehl existiert nicht!');
			}

			data.push(`**Name:** ${command.name}`);

			if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
			if (command.description) data.push(`**Beschreibung:** ${command.description}`);
			if (command.usage) data.push(`**Nutzung:** ${prefix}${command.name} ${command.usage}`);

			data.push(`**Cooldown:** ${command.cooldown || 3} Sekunde(n)`);

			// teamBOT BOTCOMMANDS TESTBOTCOMMANDS

			message.channel.send(data, { split: true });
		}
	},
};