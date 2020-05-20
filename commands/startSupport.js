module.exports = {
    name: 'startSupport',
    description: 'Sende deine Bewerbung ',
    guildOnly: true,
    execute(message) {
        // Wenn Support und Team Rang
        if (message.channel.id == 696821086846844969 && message.member.roles.has('697424990592696350')) {
            let suggestembed = new Discord.RichEmbed()
                .setTitle("Elite-Reborn Support")
                .setDescription("Reagiere mit 📩 um deinen persönlichen Support Channel zu erstellen.")
                .setColor("#00FFFF")
                .setThumbnail('https://cdn.discordapp.com/avatars/712200237690650644/1d8ffdac4456cf8388d7b4941afb3661.png?size=2048')
                .addFields({ name: 'Missbrauch ist Strafbar', value: 'ICH BANN EUCH WEG' });
            message.channel.send({ embed: suggestedembed }).then(embedMessage => {
                embedMessage.react("📩");
            });

            const filter = (reaction) => {
                return reaction.emoji.name;
            };
            message.awaitReactions(filter)
                .then(collected => {
                    const reaction = collected.first();
                    if (reaction.emoji.name === '📩') {
                        message.send("DU HAST REAGIERT");
                    }
                })
                .catch(collected => {
                    message.send("NEEEE")
                });
        }
    },
};