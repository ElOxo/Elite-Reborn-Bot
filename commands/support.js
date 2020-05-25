module.exports = {
    name: 'support',
    description: 'Sende deine Bewerbung ',
    guildOnly: true,
    execute(message) {
        // Wenn Support und Team Rang
        if (message.channel.id == "696821086846844969" && message.member.roles.has('697424990592696350')) {

            const exampleEmbed = {
                color: 15105570,
                title: 'Elite-Reborn Support',
                description: 'Reagiere mit 📩 um deinen persönlichen Support Channel zu erstellen.',
                thumbnail: {
                    url: 'https://cdn.discordapp.com/avatars/712200237690650644/1d8ffdac4456cf8388d7b4941afb3661.png?size=2048',
                },
                fields: [
                    {
                        name: 'Missbrauch ist Strafbar',
                        value: 'ICH BANN EUCH WEG',
                    }
                ],
                timestamp: new Date(),
            };

            message.channel.send({ embed: exampleEmbed }).then(embedMessage => {
                embedMessage.react("📩");
            });




        }
    },
};