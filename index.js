require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const WELCOME_MESSAGE = `⚠️ **Warning!** ⚠️
Scammers are pretending to be Will (and moderators in the server) and messaging new members.
I will **never** message you first or ask for you to do anything.
If someone claims to be me, **block and report them immediately,** DO NOT interact with ANYONE you dont know in dms.
DO NOT ACCEPT FRIEND REQUESTS FROM PEOPLE YOU DO NOT KNOW, I WILL NEVER ADD YOU
Stay safe! 🚀
- TradeWithWill

INTERESTED IN **LIVE TRADING??:** https://www.patreon.com/TradeWithWill/membership`;

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', (member) => {
    member.send(WELCOME_MESSAGE).catch(err => console.log(`Could not DM ${member.user.tag}`));

    console.log(`Sent dm to user ${member.user.tag}`)
});

client.login(process.env.TOKEN);
